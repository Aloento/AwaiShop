namespace SoarCraft.AwaiShop.Test.AdminHub;

using Microsoft.AspNetCore.SignalR.Client;
using Microsoft.Extensions.DependencyInjection;
using System.Security.Authentication;

[TestClass]
public abstract class AdminNet : SignalR
{
    protected static HubConnection Admin { get; } = new HubConnectionBuilder()
        .WithUrl($"{Url}AdminHub", opt =>
            opt.AccessTokenProvider = () => Sec
                .TryGet("AdminJWT", out var jwt)
                ? Task.FromResult(jwt)
                : throw new AuthenticationException()
        )
        .WithAutomaticReconnect()
        .WithStatefulReconnect()
        .AddMessagePackProtocol()
        .Build();

    [TestInitialize]
    public virtual async Task TestInitialize()
    {
        _ = Admin.On("OnNewUser", () => Assert.Fail("[Admin] OnNewUser"));

        await Admin.StartAsync();
        Assert.AreEqual(HubConnectionState.Connected, Admin.State);
    }
}
