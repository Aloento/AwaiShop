namespace SoarCraft.LoveOTC.AdminHub;

using Hub;
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
    public async Task<Persona> OrderUser() {
        return new() {
            Name = "Aloento",
            Phone = "+36 300000000",
            EMail = "Aloento@T-Systems.com",
            Address = string.Concat(Enumerable.Range(0, 10).Select(_ => Guid.NewGuid().ToString()))
        };
    }
}
