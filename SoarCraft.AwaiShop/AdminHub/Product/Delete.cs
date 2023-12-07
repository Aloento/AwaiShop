namespace SoarCraft.AwaiShop.AdminHub;

using Microsoft.EntityFrameworkCore;
using Models;

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
        this.archiveTypes(oldVari.Types);

        return await this.Db.SaveChangesAsync() > 0;
    }

    /**
     * <remarks>
     * @author Aloento
     * @since 0.1.0
     * @version 0.2.0
     * </remarks>
     */
    public async Task<bool> ProductDeleteType(uint variantId, string reqType) {
        var type = this.Db.Types
            .Where(x => x.VariantId == variantId && x.Name == reqType);

        var any = await type
            .SelectMany(x => x.Combos)
            .SelectMany(x => x.Orders)
            .AnyAsync();

        if (!any)
            return await type.ExecuteDeleteAsync() > 0;

        var oldType = await type
            .Include(x => x.Combos)
            .SingleAsync();

        oldType.IsArchived = true;
        await this.archiveCombos(oldType.Combos);

        return await this.Db.SaveChangesAsync() > 0;
    }

    /**
     * <remarks>
     * @author Aloento
     * @since 0.5.0
     * @version 0.2.0
     * </remarks>
     */
    private async Task deleteCombo(uint comboId) {
        var any = await this.Db.Combos
            .Where(x => x.ComboId == comboId)
            .SelectMany(x => x.Orders)
            .AnyAsync();

        var ins = new Combo { ComboId = comboId };

        if (any) {
            this.Db.Combos.Attach(ins);
            ins.IsArchived = true;
        } else
            this.Db.Combos.Remove(ins);
    }

    /**
     * <remarks>
     * @author Aloento
     * @since 0.1.0
     * @version 0.2.0
     * </remarks>
     */
    public async Task<bool> ProductDeleteCombo(uint comboId) {
        await this.deleteCombo(comboId);
        return await this.Db.SaveChangesAsync() > 0;
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
