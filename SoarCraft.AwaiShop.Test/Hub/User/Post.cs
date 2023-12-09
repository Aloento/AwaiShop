namespace SoarCraft.AwaiShop.Test.Hub.User;

using Bogus;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.SignalR.Client;
using System.Diagnostics;

[TestClass]
[TestCategory("Hub.User.Post")]
public class Post : ShopNet
{
    /**
     * <remarks>
     * @Author Aloento
     * @TargetVersion 0.1.2
     * @PersonaVersion 0.1.0
     * </remarks>
     */
    [TestMethod]
    public async Task UserPostUpdate()
    {
        var faker = new Faker();

        #region ErrorExpected

        var err = await Assert.ThrowsExceptionAsync<HubException>(() =>
            User.InvokeAsync(nameof(UserPostUpdate), new
            {
                Name = faker.Lorem.Letter(),
                Phone = faker.Lorem.Paragraph(),
                EMail = faker.Lorem.Paragraph(),
                Address = faker.Lorem.Letter(sbyte.MaxValue)
            }));

        Debug.WriteLine(err.Message);

        #endregion

        var persona = new
        {
            Name = "Aloento",
            Phone = faker.Phone.PhoneNumber(),
            EMail = faker.Internet.ExampleEmail(),
            Address = faker.Address.FullAddress()
        };

        var res = await User.InvokeAsync<bool>(nameof(UserPostUpdate), persona);
        Assert.IsTrue(res);

        var curr = await User.InvokeAsync<Dictionary<string, dynamic>>(nameof(Get.UserGetMe), 0, null);
        Assert.IsNotNull(curr);

        Assert.AreEqual(persona.Name, curr["Name"]);
        Assert.AreEqual(persona.Phone, curr["Phone"]);
        Assert.AreEqual(persona.EMail, curr["EMail"]);
        Assert.AreEqual(persona.Address, curr["Address"]);
    }
}
