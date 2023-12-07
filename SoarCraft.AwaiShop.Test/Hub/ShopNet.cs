namespace SoarCraft.AwaiShop.Test;

[TestClass]
public class ShopNet : SignalR
{
    [ClassInitialize]
    public static async Task ClassInitialize(TestContext testContext)
    {
        await Guest.StartAsync();
        await User.StartAsync();
    }
}
