namespace SoarCraft.AwaiShop.Test.Hub.User;

using Microsoft.AspNetCore.SignalR.Client;
using Newtonsoft.Json;
using System.Diagnostics;

[TestClass]
[TestCategory("Hub.User.Get")]
public class Get : ShopNet
{
    /**
     * <remarks>
     * @Author Aloento
     * @TargetVersion 0.1.0
     * </remarks>
     */
    [TestMethod]
    public async Task UserGetMe()
    {
        var res = await User.InvokeAsync<Dictionary<string, dynamic>>(nameof(UserGetMe), 0, null);
        Assert.IsNotNull(res);
        Debug.WriteLine(JsonConvert.SerializeObject(res, Formatting.Indented));

        Assert.IsFalse(string.IsNullOrWhiteSpace(res["Name"]));
        Assert.IsFalse(string.IsNullOrWhiteSpace(res["EMail"]));
        Assert.IsFalse(string.IsNullOrWhiteSpace(res["Phone"]));
        Assert.IsFalse(string.IsNullOrWhiteSpace(res["Address"]));

        byte[] version = res["Version"];
        Assert.IsNotNull(version);
        Assert.IsTrue(version.Length > 0);

        var noChange = await User.InvokeAsync<bool>(nameof(UserGetMe), 0, version);
        Assert.IsTrue(noChange);
    }
}
