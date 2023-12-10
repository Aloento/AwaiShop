namespace SoarCraft.AwaiShop.Test.Hub.Product;

using Microsoft.AspNetCore.SignalR.Client;

[TestClass]
[TestCategory("Hub.Product.Get")]
public class Get : ShopNet
{
    public static Task<T> ProductEntity<T>(uint key, byte[]? version) =>
        Guest.InvokeAsync<T>(nameof(ProductEntity), key, version);

    public static Task<T> PhotoEntity<T>(uint key, byte[]? version) =>
        Guest.InvokeAsync<T>(nameof(PhotoEntity), key, version);

    public static Task<T> TypeEntity<T>(uint key, byte[]? version) =>
        Guest.InvokeAsync<T>(nameof(TypeEntity), key, version);

    public static Task<T> VariantEntity<T>(uint key, byte[]? version) =>
        Guest.InvokeAsync<T>(nameof(VariantEntity), key, version);

    public static Task<dynamic[]> ProductGetComboList(uint prodId) =>
        Guest.InvokeAsync<dynamic[]>(nameof(ProductGetComboList), prodId);

    public static Task<uint[]> ProductGetPhotoList(uint prodId) =>
        Guest.InvokeAsync<uint[]>(nameof(ProductGetPhotoList), prodId);

    /**
     * <remarks>
     * @Author Aloento
     * @TargetVersion 1.0.0
     * </remarks>
     */
    [TestMethod]
    public async Task ComboList()
    {
        _ = await Guest.InvokeAsync<Dictionary<string, dynamic>[]>(nameof(ProductGetComboList), 0);
    }
}
