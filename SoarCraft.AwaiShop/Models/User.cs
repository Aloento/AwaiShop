﻿namespace SoarCraft.AwaiShop.Models;

using System.ComponentModel.DataAnnotations;
using Entities;
using Microsoft.EntityFrameworkCore;

/**
 * <remarks>
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 * </remarks>
 */
[Index(nameof(EMail), IsUnique = true)]
public class User : Concurrency {
    public Guid UserId { get; set; }

    [StringLength(50, MinimumLength = 2)]
    public required string Name { get; set; }

    [EmailAddress]
    [StringLength(100, MinimumLength = 6)]
    public required string EMail { get; set; }

    [Phone]
    [StringLength(15, MinimumLength = 7)]
    public required string Phone { get; set; }

    [StringLength(100, MinimumLength = 20)]
    public required string Address { get; set; }

    public bool? Admin { get; set; }
}
