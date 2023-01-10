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

        modelBuilder.Entity<DeelnemerMetBand>()
            .HasKey(db => new { db.BandId, db.DeelnemerId });
        modelBuilder.Entity<DeelnemerMetBand>()
            .HasOne(db => db.Band)
            .WithMany(b => b.DeelnemersMetBands)
            .HasForeignKey(db => db.BandId);
        modelBuilder.Entity<DeelnemerMetBand>()
            .HasOne(db => db.Deelnemer)
            .WithMany(d => d.DeelnemersMetBands)
            .HasForeignKey(db => db.DeelnemerId);

        modelBuilder.Entity<Opvoering>()
            .HasKey(o => new { o.BandId, o.EvenementId });
        modelBuilder.Entity<Opvoering>()
            .HasOne(o => o.Evenement)
            .WithMany(e => e.Opvoeringen)
            .HasForeignKey(o => o.EvenementId);
        modelBuilder.Entity<Opvoering>()
            .HasOne(o => o.Band)
            .WithMany(b => b.Opvoeringen)
            .HasForeignKey(o => o.BandId);
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
    }

    public DbSet<Gebruiker> Gebruikers { get; set; }
    public DbSet<Deelnemer> Deelnemers { get; set; }
    public DbSet<Band> Bands { get; set; }
    public DbSet<DeelnemerMetBand> DeelnemerMetBands { get; set; }
}