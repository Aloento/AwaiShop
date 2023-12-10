namespace SoarCraft.AwaiShop.Test.Hub;

using Microsoft.AspNetCore.SignalR.Client;
using Microsoft.Extensions.DependencyInjection;

[TestClass]
public abstract class ShopNet : SignalR
{
    protected static HubConnection Guest { get; } = new HubConnectionBuilder()
        .WithUrl($"{Url}Hub")
        .WithAutomaticReconnect()
        .WithStatefulReconnect()
        .AddMessagePackProtocol()
        .Build();

    [TestInitialize]
    public virtual async Task TestInitialize()
    {
        _ = Guest.On("OnNewUser", () => Assert.Fail("[Guest] OnNewUser"));

        await Guest.StartAsync();
        Assert.AreEqual(HubConnectionState.Connected, Guest.State);
    }

    public static IAsyncEnumerable<byte[]> ObjectStorageGet(Guid oid) =>
        Guest.StreamAsync<byte[]>(nameof(ObjectStorageGet), oid);
}
