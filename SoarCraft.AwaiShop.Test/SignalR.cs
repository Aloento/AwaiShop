namespace SoarCraft.AwaiShop.Test;

using Microsoft.AspNetCore.SignalR.Client;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Security.Authentication;

[TestClass]
public abstract class SignalR
{
    protected const string Url = "https://localhost/";

    protected static IConfigurationProvider Sec => new ConfigurationBuilder()
        .AddUserSecrets<SignalR>()
        .Build()
        .Providers
        .First();

    protected static HubConnection Guest => new HubConnectionBuilder()
        .WithUrl($"{Url}Hub")
        .WithAutomaticReconnect()
        .WithStatefulReconnect()
        .AddMessagePackProtocol()
        .Build();

    protected static HubConnection User => new HubConnectionBuilder()
        .WithUrl($"{Url}Hub", opt =>
            opt.AccessTokenProvider = () => Sec
                .TryGet("UserJWT", out string? jwt)
                ? Task.FromResult(jwt)
                : throw new AuthenticationException()
        )
        .WithAutomaticReconnect()
        .WithStatefulReconnect()
        .AddMessagePackProtocol()
        .Build();

    [AssemblyInitialize]
    public static void AssemblyInitialize(TestContext testContext)
    {
        _ = Guest.On("OnNewUser", () => Assert.Fail("[Guest] OnNewUser"));
        _ = User.On("OnNewUser", () => testContext.WriteLine("[User] OnNewUser"));
    }
}
