namespace SoarCraft.AwaiShop.Test.Hub.Product;
using Microsoft.AspNetCore.SignalR.Client;
using Newtonsoft.Json;
using System.Diagnostics;

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

    public static Task<Dictionary<string, dynamic>[]> ProductGetComboList(uint prodId) =>
        Guest.InvokeAsync<Dictionary<string, dynamic>[]>(nameof(ProductGetComboList), prodId);

    public static Task<uint[]> ProductGetPhotoList(uint prodId) =>
        Guest.InvokeAsync<uint[]>(nameof(ProductGetPhotoList), prodId);

    /**
     * <remarks>
     * @Author Aloento
     * @Version 2023/12/10
     * </remarks>
     */
    [TestMethod]
    public async Task TestProductGet()
    {
        #region Prepare

        var cates = await Gallery.Get.GalleryGetCategories();
        Assert.IsTrue(cates.Length > 0);

        var prods = await Gallery.Get.GalleryGetProducts(cates[0]);
        Assert.IsTrue(prods.Length > 0);

        #endregion

        #region Basic

        var prod = await ProductEntity<Dictionary<string, dynamic>>(prods[0], null);
        Assert.IsNotNull(prod);
        Debug.WriteLine($"Product {prods[0]} : \n" + JsonConvert.SerializeObject(prod, Formatting.Indented));

        Assert.IsFalse(string.IsNullOrWhiteSpace(prod["Name"]));

        #endregion

        #region Combo

        var combos = await ProductGetComboList(prods[0]);
        Assert.IsTrue(combos.Length > 0);
        Debug.WriteLine($"Combo {prods[0]} : \n" + JsonConvert.SerializeObject(combos[0], Formatting.Indented));

        var combo = new
        {
            Id = (uint)combos[0]["ComboId"],
            Stock = (ushort)combos[0]["Stock"],
            Types = ((object[])combos[0]["Types"]).Cast<byte>().ToArray()
        };

        #endregion

        #region Type

        var type = await TypeEntity<Dictionary<string, dynamic>>(combo.Types[0], null);
        Assert.IsNotNull(type);
        Debug.WriteLine($"Type {combo.Types[0]} : \n" + JsonConvert.SerializeObject(type, Formatting.Indented));

        Assert.IsFalse(string.IsNullOrWhiteSpace(type["Name"]));
        var varId = (uint)type["VariantId"];
        Assert.IsTrue(varId > 0);

        #endregion

        #region Variant

        var vari = await VariantEntity<Dictionary<string, dynamic>>(varId, null);
        Assert.IsNotNull(vari);
        Debug.WriteLine($"Variant {varId} : \n" + JsonConvert.SerializeObject(vari, Formatting.Indented));

        Assert.IsFalse(string.IsNullOrWhiteSpace(vari["Name"]));
        Assert.AreEqual(prods[0], vari["ProductId"]);

        #endregion

        #region Photo

        var photos = await ProductGetPhotoList(prods[0]);
        Assert.IsTrue(photos.Length > 0);

        var photo = await PhotoEntity<Dictionary<string, dynamic>>(photos[0], null);
        Assert.IsNotNull(photo);
        Debug.WriteLine($"Photo {photos[0]} : \n" + JsonConvert.SerializeObject(photo, Formatting.Indented));

        Assert.IsTrue(Guid.TryParse(photo["ObjectId"], out Guid oid));

        #endregion

        #region Object

        var stream = ObjectStorageGet(oid);

        await foreach (var slice in stream)
        {
            Assert.IsTrue(slice.Length > 0);
            Debug.WriteLine($"Obj {oid} Got Slice : {slice.Length}");
        }

        #endregion
    }
}
