namespace SoarCraft.AwaiShop.Helpers;

using Microsoft.AspNetCore.SignalR;
using Microsoft.Identity.Web;

/**
 * <remarks>
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 * </remarks>
 */
public class UserIdProvider : IUserIdProvider {
    public string GetUserId(HubConnectionContext connection) => connection.User.GetObjectId()!;
}
