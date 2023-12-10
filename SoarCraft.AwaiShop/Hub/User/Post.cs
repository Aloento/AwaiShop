namespace SoarCraft.AwaiShop.Hub;

using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

internal partial class ShopHub {
    /**
     * <remarks>
     * @author Aloento
     * @since 0.5.0
     * @version 0.1.2
     * </remarks>
     */
    [Authorize]
    public async Task<bool> UserPostUpdate(Persona req) {
        var validCtx = new ValidationContext(req);
        var validRes = new List<ValidationResult>();

        var isValid = Validator.TryValidateObject(req, validCtx, validRes, true);
        if (!isValid) {
            var msg = validRes.Select(x => x.ErrorMessage);
            throw new HubException("\n" + string.Join("; \n", msg));
        }

        var hasNew = this.Context.Items.TryGetValue("NewUser", out var isNew);
        if (hasNew && isNew is true) {
            var email = this.Context.User!.FindFirstValue("emails");

            if (email is null || string.IsNullOrWhiteSpace(email) ||
                !email.Equals(req.EMail, StringComparison.OrdinalIgnoreCase)) {
                this.Context.Abort();
                throw new HubException($"EMail ${email} wanted, but got ${req.EMail} from [${this.UserId}]");
            }

            await this.Db.Users.AddAsync(new() {
                UserId = this.UserId,
                Name = req.Name!,
                EMail = req.EMail!,
                Phone = req.Phone!,
                Address = req.Address!
            });
            var row1 = await this.Db.SaveChangesAsync();

            this.Context.Items.Remove("NewUser");
            this.Logger.NewUser(req.Name, this.Context);
            return row1 > 0;
        }

        var row = await this.Db.Users
            .Where(x => x.UserId == this.UserId)
            .ExecuteUpdateAsync(x => x
                .SetProperty(u => u.Name, req.Name!)
                .SetProperty(u => u.EMail, req.EMail!)
                .SetProperty(u => u.Phone, req.Phone!)
                .SetProperty(u => u.Address, req.Address!)
            );

        return row > 0;
    }
}