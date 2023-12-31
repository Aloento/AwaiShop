﻿// ReSharper disable UnassignedGetOnlyAutoProperty
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
namespace SoarCraft.AwaiShop.Models;

using System.ComponentModel.DataAnnotations;
using Entities;
using Microsoft.EntityFrameworkCore;

/**
 * <remarks>
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.1
 * </remarks>
 */
[Index(nameof(ProductId), nameof(Name), IsUnique = true)]
public class Variant : Concurrency, IArchive {
    public uint VariantId { get; set; }

    [StringLength(15, MinimumLength = 1)]
    public string Name { get; set; }

    public virtual ICollection<Type> Types { get; init; }

    public uint ProductId { get; set; }

    public virtual Product Product { get; set; }

    public bool? IsArchived { get; set; }
}
