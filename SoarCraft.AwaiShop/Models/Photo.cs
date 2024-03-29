﻿#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
namespace SoarCraft.AwaiShop.Models;

using System.ComponentModel.DataAnnotations;
using Entities;

/**
 * <remarks>
 * @author Aloento
 * @since 0.1.0
 * @version 0.2.0
 * </remarks>
 */
public class Photo : Concurrency {
    public uint PhotoId { get; set; }

    [StringLength(100)]
    public string? Caption { get; set; }

    public byte Order { get; set; }

    public Guid ObjectId { get; set; }

    public virtual Storage Object { get; set; }

    public uint ProductId { get; set; }

    public virtual Product Product { get; set; }
}
