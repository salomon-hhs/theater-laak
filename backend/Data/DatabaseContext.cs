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

        //band *--* deelnemer relation
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

        //band *--* evenement relation
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
        
        //gebruiker *--* ticket relation
        modelBuilder.Entity<Ticket>()
            .HasKey(t => new { t.Id, t.EvenementId, t.GebruikerId });
        modelBuilder.Entity<Ticket>()
            .HasOne(t => t.Gebruiker)
            .WithMany(g => g.Tickets)
            .HasForeignKey(o => o.GebruikerId);
        modelBuilder.Entity<Ticket>()
            .HasOne(t => t.Evenement)
            .WithMany(e => e.Tickets)
            .HasForeignKey(t => t.EvenementId);
        
        //ticket *--1 rang relation
        modelBuilder.Entity<Ticket>()
            .HasOne(t => t.Rang);

        //evenement *--1 zaal relation
        modelBuilder.Entity<Zaal>()
            .HasMany(z => z.Evenementen)
            .WithOne(e => e.Zaal)
            .HasForeignKey(e => e.ZaalId);
        
        //zaal 1--* rang relation
        modelBuilder.Entity<Zaal>()
            .HasMany(z => z.Rangen)
            .WithOne(r => r.Zaal);
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("data source=laak.db");
    }

    public DbSet<Gebruiker> Gebruikers { get; set; }
    public DbSet<Deelnemer> Deelnemers { get; set; }
    public DbSet<Band> Bands { get; set; }
    public DbSet<DeelnemerMetBand> DeelnemerMetBands { get; set; }
    public DbSet<Evenement> Evenementen { get; set; }
    public DbSet<Ticket> Tickets { get; set; }
    public DbSet<Zaal> Zalen { get; set; }
    public DbSet<Rang> Rangen { get; set; }
}