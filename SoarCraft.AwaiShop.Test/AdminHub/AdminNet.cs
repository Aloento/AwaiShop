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
                ? Task.FromResult<string?>(jwt)
                : throw new AuthenticationException()
        )
        .AddMessagePackProtocol()
        .Build();

    [ClassInitialize]
    public static async Task ClassInitialize(TestContext testContext)
    {
        await Guest.StartAsync();
        await User.StartAsync();

        _ = Admin.On("OnNewUser", () => Assert.Fail("[Admin] OnNewUser"));
        await Admin.StartAsync();
    }

    [ClassCleanup]
    public static async Task ClassCleanup()
    {
        await Admin.DisposeAsync();
    }
}
