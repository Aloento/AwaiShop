namespace SoarCraft.AwaiShop.Test.Hub.Order;
using Bogus;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.SignalR.Client;
using System.Diagnostics;

[TestClass]
public class Post : UserNet
{
    public static Task<uint> OrderPostNew(dynamic[] cart, string? cmt) =>
        User.InvokeAsync<uint>(nameof(OrderPostNew), cart, cmt);

    public static Task<bool> OrderPostAppend(uint orderId, string cmt) =>
        User.InvokeAsync<bool>(nameof(OrderPostAppend), orderId, cmt);

    public static Task<bool> OrderPostCancel(uint orderId, string reason) =>
        User.InvokeAsync<bool>(nameof(OrderPostCancel), orderId, reason);

    // TODO
    public static Task<bool> OrderPostReceived(uint orderId) =>
        User.InvokeAsync<bool>(nameof(OrderPostReceived), orderId);

    /**
     * <remarks>
     * @Author Aloento
     * @Version 2023/12/12
     * </remarks>
     */
    [TestMethod]
    public async Task TestPostOrder()
    {
        #region Prep

        var g = await Gallery.Get.GalleryGetCategories();
        Assert.IsTrue(g.Length > 0);

        var p = await Gallery.Get.GalleryGetProducts(g[0]);
        Assert.IsTrue(p.Length > 0);

        var c = await Product.Get.ProductGetComboList(p[0]);
        Assert.IsTrue(c.Length > 0);

        var t = ((dynamic[])c[0]["Types"]).Select(Convert.ToUInt32).ToArray();
        Assert.IsTrue(t.Length > 0);

        var types = new List<string>();

        foreach (var id in t)
        {
            var type = await Product.Get.TypeEntity<Dictionary<string, dynamic>>(id, null);
            Assert.IsFalse(string.IsNullOrWhiteSpace(type["Name"]));
            types.Add(type["Name"]);
        }

        #endregion

        #region Create

        var faker = new Faker();

        var orderId = await OrderPostNew(
        [
            new
            {
                ProdId = p[0],
                Type = types,
                Quantity = 3
            }
        ], faker.Lorem.Sentence());
        Assert.IsTrue(orderId > 0);
        Debug.WriteLine($"Created Order : {orderId}");

        var cmt = await OrderPostAppend(orderId, faker.Lorem.Sentence());
        Assert.IsTrue(cmt);

        var cancel = await OrderPostCancel(orderId, faker.Lorem.Sentence());
        Assert.IsTrue(cancel);

        #endregion

        #region Exception

        _ = await Assert.ThrowsExceptionAsync<HubException>(async () =>
            await OrderPostNew(
            [
                new
                {
                    ProdId = p[0],
                    Type = types,
                    Quantity = 10
                }
            ], null));

        _ = await Assert.ThrowsExceptionAsync<HubException>(async () =>
            await OrderPostNew(
            [
                new
                {
                    ProdId = p[0],
                    Type = new[]{faker.Lorem.Sentence()},
                    Quantity = 1
                }
            ], null));

        _ = await Assert.ThrowsExceptionAsync<HubException>(async () =>
            await OrderPostNew(
            [
                new
                {
                    ProdId = 123456789,
                    Type = types,
                    Quantity = 1
                }
            ], null));

        #endregion
    }
}
