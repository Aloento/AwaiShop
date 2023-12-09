namespace SoarCraft.AwaiShop.Test.AdminHub;

using Microsoft.AspNetCore.SignalR.Client;
using Microsoft.Extensions.DependencyInjection;
using System.Security.Authentication;

[TestClass]
public abstract class AdminNet : SignalR
{
    protected static HubConnection Admin => new HubConnectionBuilder()
        .WithUrl($"{Url}AdminHub", opt =>
            opt.AccessTokenProvider = () => Sec
                .TryGet("AdminJWT", out string? jwt)
                ? Task.FromResult(jwt)
                : throw new AuthenticationException()
        )
        .WithAutomaticReconnect()
        .WithStatefulReconnect()
        .AddMessagePackProtocol()
        .Build();

    [ClassInitialize(InheritanceBehavior.BeforeEachDerivedClass)]
    public static async Task ClassInitialize(TestContext testContext)
    {
        await Guest.StartAsync();
        Assert.AreEqual(HubConnectionState.Connected, Guest.State);

        await User.StartAsync();
        Assert.AreEqual(HubConnectionState.Connected, User.State);

        _ = Admin.On("OnNewUser", () => Assert.Fail("[Admin] OnNewUser"));
        await Admin.StartAsync();
        Assert.AreEqual(HubConnectionState.Connected, Admin.State);
    }
}
