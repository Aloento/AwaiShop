namespace SoarCraft.AwaiShop.Test.Hub;
using Microsoft.AspNetCore.SignalR.Client;

[TestClass]
public abstract class ShopNet : SignalR
{
    [ClassInitialize(InheritanceBehavior.BeforeEachDerivedClass)]
    public static async Task ClassInitialize(TestContext testContext)
    {
        await Guest.StartAsync();
        Assert.AreEqual(HubConnectionState.Connected, Guest.State);

        await User.StartAsync();
        Assert.AreEqual(HubConnectionState.Connected, User.State);
    }
}
