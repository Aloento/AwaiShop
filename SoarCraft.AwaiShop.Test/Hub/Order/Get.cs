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
     * @Version 2023/12/10
     * </remarks>
     */
    [TestMethod]
    public async Task TestOrderGet()
    {
        var orders = await OrderGetList();
        Assert.IsTrue(orders.Length > 0);
        Debug.WriteLine("OrderList : " + JsonConvert.SerializeObject(orders[0], Formatting.Indented));

        var orderInf = new
        {
            Id = (uint)orders[0]["OrderId"],
            Prods = ((object[])orders[0]["Products"]).Select(Convert.ToUInt32).ToArray(),
            Quantity = (ushort)orders[0]["Quantity"]
        };

        var order = await OrderGetDetail(orderInf.Id);
        Assert.IsNotNull(order);
        Debug.WriteLine("OrderDetail : " + JsonConvert.SerializeObject(order, Formatting.Indented));

        var items = ((Dictionary<string, dynamic>[])order["Items"])
            .Select(x => new
            {
                Quantity = (byte)x["Quantity"],
                Types = ((object[])x["Types"]).Select(Convert.ToUInt32).ToArray()
            }).ToArray();
    }
}
