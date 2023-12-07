namespace SoarCraft.AwaiShop.AdminHub;

using Microsoft.EntityFrameworkCore;

internal partial class AdminHub {
    /**
     * <remarks>
     * @author Aloento
     * @since 0.1.0
     * @version 0.2.0
     * </remarks>
     */
    public async Task<bool> ProductDeletePhoto(uint photoId) {
        var res = await this.Db.Photos
            .Where(x => x.PhotoId == photoId)
            .ExecuteDeleteAsync();

        return res > 0;
    }

    /**
     * <remarks>
     * @author Aloento
     * @since 0.1.0
     * @version 0.2.0
     * </remarks>
     */
    public async Task<bool> ProductDeleteVariant(uint variantId) {
        var variant = this.Db.Variants
            .Where(x => x.VariantId == variantId);

        var any = await variant
            .SelectMany(x => x.Types)
            .SelectMany(x => x.Combos)
            .SelectMany(x => x.Orders)
            .AnyAsync();

        if (!any)
            return await variant.ExecuteDeleteAsync() > 0;

        var oldVari = await variant
                .Include(x => x.Types)
                .ThenInclude(x => x.Combos)
                .SingleAsync();

        oldVari.IsArchived = true;
        archiveTypes(oldVari.Types);

        return await this.Db.SaveChangesAsync() > 0;
    }

    /**
     * <remarks>
     * @author Aloento
     * @since 0.1.0
     * @version 0.2.0
     * </remarks>
     */
    public async Task<bool> ProductDeleteType(uint variantId, string type) {
        throw new NotImplementedException();
    }

    /**
     * <remarks>
     * @author Aloento
     * @since 0.1.0
     * @version 0.2.0
     * </remarks>
     */
    public async Task<bool> ProductDeleteCombo(uint comboId) {
        throw new NotImplementedException();
    }

    /**
     * <remarks>
     * @author Aloento
     * @since 0.5.0
     * @version 0.2.0
     * </remarks>
     */
    public async Task<bool> ProductDeleteProduct(uint prodId) {
        return true;
    }
}
