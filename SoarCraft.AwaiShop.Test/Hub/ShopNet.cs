namespace SoarCraft.AwaiShop.Test.Hub;

[TestClass]
public abstract class ShopNet : SignalR
{
    [ClassInitialize]
    public static async Task ClassInitialize(TestContext testContext)
    {
        await Guest.StartAsync();
        await User.StartAsync();
    }
}
