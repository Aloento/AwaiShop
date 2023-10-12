namespace SoarCraft.LoveOTC.AdminHub;

using JetBrains.Annotations;

internal partial class AdminHub {
    /**
     * <remarks>
     * @author Aloento
     * @since 0.1.0
     * @version 0.1.0
     * </remarks>
     */
    [PublicAPI]
    public async Task<uint> ProductPostCreate(string name) {
        throw new NotImplementedException();
    }

    /**
     * <remarks>
     * @author Aloento
     * @since 0.1.0
     * @version 0.1.0
     * </remarks>
     */
    [PublicAPI]
    public async Task<bool> ProductPostMovePhoto(uint photoId, bool up) {
        throw new NotImplementedException();
    }

    /**
     * <remarks>
     * @author Aloento
     * @since 0.1.0
     * @version 0.1.0
     * </remarks>
     */
    [PublicAPI]
    public async Task<bool> ProductPostPhoto(string file) {
        throw new NotImplementedException();
    }

    /**
     * <remarks>
     * @author Aloento
     * @since 0.1.0
     * @version 0.1.0
     * </remarks>
     */
    [PublicAPI]
    public async Task<uint> ProductPostVariant(string prodId, string name) {
        throw new NotImplementedException();
    }

    /**
     * <remarks>
     * @author Aloento
     * @since 0.1.0
     * @version 0.1.0
     * </remarks>
     */
    [PublicAPI]
    public async Task<bool> ProductPostType(uint variantId, string name) {
        throw new NotImplementedException();
    }

    /**
     * <remarks>
     * @author Aloento
     * @since 0.1.0
     * @version 0.1.0
     * </remarks>
     */
    [PublicAPI]
    public async Task<uint> ProductPostCombo(string prodId, Dictionary<string, string> combo, ushort stock) {
        throw new NotImplementedException();
    }
}
