namespace SoarCraft.AwaiShop.Test.Hub;

using Microsoft.AspNetCore.SignalR.Client;
using Microsoft.Extensions.DependencyInjection;
using System.Diagnostics;
using System.Security.Authentication;

[TestClass]
public abstract class UserNet : ShopNet
{
    protected static HubConnection User { get; } = new HubConnectionBuilder()
        .WithUrl($"{Url}Hub", opt =>
            opt.AccessTokenProvider = () => Sec
                .TryGet("UserJWT", out var jwt)
                ? Task.FromResult(jwt)
                : throw new AuthenticationException()
        )
        .WithAutomaticReconnect()
        .WithStatefulReconnect()
        .AddMessagePackProtocol()
        .Build();

    [TestInitialize]
    public override async Task TestInitialize()
    {
        await base.TestInitialize();
        _ = User.On("OnNewUser", () => Debug.WriteLine("[User] OnNewUser"));

        await User.StartAsync();
        Assert.AreEqual(HubConnectionState.Connected, User.State);
    }
}
