namespace SoarCraft.AwaiShop.Test.Hub.User;

using Microsoft.AspNetCore.SignalR.Client;

[TestClass]
[TestCategory("ShopHub.Get")]
public class Get : ShopNet
{
    [TestMethod]
    public async Task UserGetMe()
    {
        dynamic res = await User.InvokeAsync<dynamic>(nameof(UserGetMe));
    }
}
