namespace SoarCraft.AwaiShop.Test.Hub.Product;

using Microsoft.AspNetCore.SignalR.Client;

[TestClass]
[TestCategory("Hub.Product.Get")]
public class Get : ShopNet
{
    /**
     * <remarks>
     * @Author Aloento
     * @TargetVersion 1.0.0
     * </remarks>
     */
    [TestMethod]
    public async Task ProductGetComboList()
    {
        _ = await Guest.InvokeAsync<Dictionary<string, dynamic>[]>(nameof(ProductGetComboList), 0);
    }
}
