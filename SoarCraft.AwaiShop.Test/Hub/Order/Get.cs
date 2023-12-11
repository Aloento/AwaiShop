namespace SoarCraft.AwaiShop.Test.Hub.Order;

using Microsoft.AspNetCore.SignalR.Client;
using Newtonsoft.Json;
using System.Diagnostics;

[TestClass]
[TestCategory("Hub.Order.Get")]
public class Get : UserNet
{
    public static Task<T> OrderEntity<T>(uint key, byte[]? version) =>
        User.InvokeAsync<T>(nameof(OrderEntity), key, version);

    public static Task<T> CommentEntity<T>(uint key, byte[]? version) =>
        User.InvokeAsync<T>(nameof(CommentEntity), key, version);

    public static Task<Dictionary<string, dynamic>[]> OrderGetList() =>
        User.InvokeAsync<Dictionary<string, dynamic>[]>(nameof(OrderGetList));

    public static Task<Dictionary<string, dynamic>> OrderGetDetail(uint orderId) =>
        User.InvokeAsync<Dictionary<string, dynamic>>(nameof(OrderGetDetail), orderId);

    /**
     * <remarks>
     * @Author Aloento
     * @Version 2023/12/11
     * </remarks>
     */
    [TestMethod]
    public async Task TestOrderGet()
    {
        var orders = await OrderGetList();
        Assert.IsTrue(orders.Length > 0);

        var orderInf = new
        {
            Id = (uint)orders[0]["OrderId"],
            Prods = ((dynamic[])orders[0]["Products"]).Select(Convert.ToUInt32).ToArray(),
            Quantity = (ushort)orders[0]["Quantity"]
        };

        var orderIns = await OrderEntity<Dictionary<string, dynamic>>(orderInf.Id, null);
        Assert.IsNotNull(orderIns);
        Debug.WriteLine("Order : " + JsonConvert.SerializeObject(orderIns, Formatting.Indented));

        var order = await OrderGetDetail(orderInf.Id);
        Assert.IsNotNull(order);

        var items = ((dynamic[])order["Items"])
            .Select(x => new
            {
                Quantity = (byte)x["Quantity"],
                Types = ((dynamic[])x["Types"]).Select(Convert.ToUInt32).ToArray()
            }).ToArray();
        Assert.IsTrue(items.Length > 0);

        foreach (var item in items)
        {
            Debug.WriteLine($"Quantity : {item.Quantity}");

            foreach (var typeId in item.Types)
            {
                var type = await Product.Get.TypeEntity<Dictionary<string, dynamic>>(typeId, null);
                Assert.IsNotNull(type);
                Debug.WriteLine($"HasType : {type["Name"]}");
            }
        }

        var cmts = ((dynamic[])order["Comments"]).Select(Convert.ToUInt32).ToArray();
        Assert.IsTrue(cmts.Length > 0);

        foreach (var cmtId in cmts)
        {
            var cmt = await CommentEntity<Dictionary<string, dynamic>>(cmtId, null);
            Assert.IsNotNull(cmt);
            Debug.WriteLine($"Comment : {cmt["Content"]}");
        }
    }
}
