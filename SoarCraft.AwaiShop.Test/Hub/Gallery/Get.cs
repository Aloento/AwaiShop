namespace SoarCraft.AwaiShop.Test.Hub.Gallery;

using Microsoft.AspNetCore.SignalR.Client;
using Newtonsoft.Json;
using System.Diagnostics;

[TestClass]
[TestCategory("Hub.Gallery.Get")]
public class Get : ShopNet
{
    public static Task<string[]> GalleryGetCategories() =>
        Guest.InvokeAsync<string[]>(nameof(GalleryGetCategories));

    /**
     * <remarks>
     * @Author Aloento
     * @TargetVersion 0.2.0
     * </remarks>
     */
    [TestMethod]
    public async Task Categories()
    {
        var res = await GalleryGetCategories();
        Assert.IsTrue(res.Length > 0);
        Debug.WriteLine(JsonConvert.SerializeObject(res, Formatting.Indented));
    }

    public static Task<uint[]> GalleryGetProducts(string category) =>
        Guest.InvokeAsync<uint[]>(nameof(GalleryGetProducts), category);

    /**
     * <remarks>
     * @Author Aloento
     * @TargetVersion 0.2.0
     * </remarks>
     */
    [TestMethod]
    public async Task Products()
    {
        var categories = await GalleryGetCategories();
        Assert.IsTrue(categories.Length > 0);

        foreach (var category in categories)
        {
            var res = await GalleryGetProducts(category);
            Assert.IsTrue(res.Length > 0);
            Debug.WriteLine($"Category [{category}] \n" + JsonConvert.SerializeObject(res, Formatting.Indented));
        }
    }
}
