using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace backend.Data;

public class DatabaseContext : IdentityDbContext
{
    public DatabaseContext(DbContextOptions o) : base(o)
    {
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Deelnemer>().ToTable("Deelnemers");
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
    }

    public DbSet<Gebruiker> Gebruikers { get; set; }
    public DbSet<Deelnemer> Deelnemers { get; set; }
}