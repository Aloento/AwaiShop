namespace SoarCraft.AwaiShop.Hub;

using System.ComponentModel.DataAnnotations;
using System.Reflection;
using Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Models;

internal partial class ShopHub {
    /**
     * <remarks>
     * @author Aloento
     * @since 0.1.0
     * @version 1.0.0
     * </remarks>
     */
    [Authorize]
    public async Task<uint> OrderPostNew(CartItem[] cart, string? cmt) {
        var valid = typeof(Comment)
            .GetProperty(nameof(Comment.Content))!
            .GetCustomAttribute<StringLengthAttribute>()!;

        if (!valid.IsValid(cmt))
            throw new HubException(valid.FormatErrorMessage("Name"));

        var order = (await this.Db.Orders.AddAsync(new() {
            UserId = this.UserId,
            Status = OrderStatus.Pending,
            CreateAt = DateTime.UtcNow,
            OrderCombos = new List<OrderCombo>(cart.Length),
            Comments = new List<Comment>(1)
        })).Entity;

        if (!string.IsNullOrWhiteSpace(cmt))
            order.Comments.Add(new() {
                Content = cmt,
                CreateAt = DateTime.UtcNow,
                Order = order,
            });

        foreach (var item in cart) {
            if (item.Quantity > 3)
                throw new HubException("No more than 3 of each type.");

            var combo = await this.Db.Combos
                .Where(x => x.IsArchived != true)
                .Where(x => x.ProductId == item.ProdId)
                .Where(x => item.Type.All(
                    i => x.Types
                        .Select(t => t.Name)
                        .Contains(i))
                )
                .SingleAsync();

            order.OrderCombos.Add(new() {
                Order = order,
                Combo = combo,
                Quantity = item.Quantity,
            });
        }

        await this.Db.SaveChangesAsync();
        return order.OrderId;
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
