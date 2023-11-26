#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
namespace SoarCraft.AwaiShop.Entities;

using System.ComponentModel.DataAnnotations;

/**
 * <remarks>
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 * </remarks>
 */
public abstract class Concurrency {
    [Timestamp]
    [ConcurrencyCheck]
    public byte[] Version { get; set; }
}
