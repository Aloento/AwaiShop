namespace SoarCraft.AwaiShop.Test;

using Microsoft.Extensions.Configuration;

[TestClass]
public abstract class SignalR
{
    protected const string Url = "https://localhost/";

    protected static IConfigurationProvider Sec { get; } = new ConfigurationBuilder()
        .AddUserSecrets<SignalR>()
        .Build()
        .Providers
        .First();
}
