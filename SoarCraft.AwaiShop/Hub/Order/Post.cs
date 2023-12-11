namespace SoarCraft.AwaiShop.Hub;

using System.ComponentModel.DataAnnotations;
using System.Reflection;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using Models;

internal partial class ShopHub {
    /**
     * <remarks>
     * @author Aloento
     * @since 0.1.0
     * @version 0.1.0
     * </remarks>
     */
    [Authorize]
    public async Task<uint> OrderPostNew(CartItem[] cart, string? cmt) {
        var many = cart.Any(x => x.Quantity > 3);
        if (many)
            throw new HubException("No more than 3 of each type.");

        var valid = typeof(Comment)
            .GetProperty(nameof(Comment.Content))!
            .GetCustomAttribute<StringLengthAttribute>()!;

        if (!valid.IsValid(cmt))
            throw new HubException(valid.FormatErrorMessage("Name"));

        throw new NotImplementedException();
    }

    /**
     * <remarks>
     * @author Aloento
     * @since 0.1.0
     * @version 0.1.0
     * </remarks>
     */
    public async Task<bool> OrderPostAppend(uint orderId, string cmt) {
        throw new NotImplementedException();
    }

    /**
     * <remarks>
     * @author Aloento
     * @since 0.1.0
     * @version 0.1.0
     * </remarks>
     */
    [Authorize]
    public async Task<bool> OrderPostCancel(uint orderId, string reason) {
        throw new NotImplementedException();
    }
}
