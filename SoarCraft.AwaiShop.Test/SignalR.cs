namespace SoarCraft.AwaiShop.Test;

using Microsoft.AspNetCore.SignalR.Client;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Security.Authentication;

[TestClass]
public class SignalR
{
    private const string Url = "https://localhost/";

    private static IConfigurationProvider Sec => new ConfigurationBuilder()
        .AddUserSecrets<SignalR>()
        .Build()
        .Providers
        .First();

    protected static HubConnection Guest => new HubConnectionBuilder()
        .WithUrl($"{Url}Hub")
        .AddMessagePackProtocol()
        .Build();

    protected static HubConnection User => new HubConnectionBuilder()
        .WithUrl($"{Url}Hub", opt =>
            opt.AccessTokenProvider = () => Sec
                .TryGet("UserJWT", out string? jwt)
                ? Task.FromResult<string?>(jwt)
                : throw new AuthenticationException()
        )
        .AddMessagePackProtocol()
        .Build();

    protected static HubConnection Admin => new HubConnectionBuilder()
        .WithUrl($"{Url}AdminHub", opt =>
            opt.AccessTokenProvider = () => Sec
                .TryGet("AdminJWT", out string? jwt)
                ? Task.FromResult<string?>(jwt)
                : throw new AuthenticationException()
        )
        .AddMessagePackProtocol()
        .Build();

    [AssemblyInitialize]
    public static void AssemblyInitialize(TestContext testContext)
    {
        _ = Guest.On("OnNewUser", () => Assert.Fail("[Guest] OnNewUser"));
        _ = User.On("OnNewUser", () => testContext.WriteLine("[User] OnNewUser"));
        _ = Admin.On("OnNewUser", () => Assert.Fail("[Admin] OnNewUser"));
    }
}
