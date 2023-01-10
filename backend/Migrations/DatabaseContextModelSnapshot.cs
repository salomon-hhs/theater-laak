﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using backend.Data;

#nullable disable

namespace backend.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.1");

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex");

                    b.ToTable("AspNetRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ClaimType")
                        .HasColumnType("TEXT");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("TEXT");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("INTEGER");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("TEXT");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("TEXT");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("INTEGER");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("TEXT");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("INTEGER");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex");

                    b.ToTable("AspNetUsers", (string)null);

                    b.UseTptMappingStrategy();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ClaimType")
                        .HasColumnType("TEXT");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("TEXT");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("TEXT");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("RoleId")
                        .HasColumnType("TEXT");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<string>("Value")
                        .HasColumnType("TEXT");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("backend.Data.Band", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Logo")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Naam")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Website")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Bands");
                });

            modelBuilder.Entity("backend.Data.DeelnemerMetBand", b =>
                {
                    b.Property<int>("BandId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("DeelnemerId")
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsBandLeider")
                        .HasColumnType("INTEGER");

                    b.HasKey("BandId", "DeelnemerId");

                    b.HasIndex("DeelnemerId");

                    b.ToTable("DeelnemerMetBands");
                });

            modelBuilder.Entity("backend.Data.Evenement", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Datum")
                        .HasColumnType("TEXT");

                    b.Property<int>("ZaalId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("ZaalId");

                    b.ToTable("Evenementen");
                });

            modelBuilder.Entity("backend.Data.Opvoering", b =>
                {
                    b.Property<int>("BandId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("EvenementId")
                        .HasColumnType("INTEGER");

                    b.HasKey("BandId", "EvenementId");

                    b.HasIndex("EvenementId");

                    b.ToTable("Opvoering");
                });

            modelBuilder.Entity("backend.Data.Ticket", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<int>("EvenementId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("GebruikerId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id", "EvenementId", "GebruikerId");

                    b.HasIndex("EvenementId");

                    b.HasIndex("GebruikerId");

                    b.ToTable("Tickets");
                });

            modelBuilder.Entity("backend.Data.Zaal", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("Toegankelijk")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Zalen");
                });

            modelBuilder.Entity("backend.Data.Deelnemer", b =>
                {
                    b.HasBaseType("Microsoft.AspNetCore.Identity.IdentityUser");

                    b.Property<DateOnly>("GeboorteDatum")
                        .HasColumnType("TEXT");

                    b.Property<string>("Logo")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Omschrijving")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.ToTable("Deelnemers", (string)null);
                });

            modelBuilder.Entity("backend.Data.Gebruiker", b =>
                {
                    b.HasBaseType("Microsoft.AspNetCore.Identity.IdentityUser");

                    b.Property<int>("AantalGedoneerd")
                        .HasColumnType("INTEGER");

                    b.ToTable("Gebruikers");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("backend.Data.DeelnemerMetBand", b =>
                {
                    b.HasOne("backend.Data.Band", "Band")
                        .WithMany("DeelnemersMetBands")
                        .HasForeignKey("BandId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("backend.Data.Deelnemer", "Deelnemer")
                        .WithMany("DeelnemersMetBands")
                        .HasForeignKey("DeelnemerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Band");

                    b.Navigation("Deelnemer");
                });

            modelBuilder.Entity("backend.Data.Evenement", b =>
                {
                    b.HasOne("backend.Data.Zaal", "Zaal")
                        .WithMany("Evenementen")
                        .HasForeignKey("ZaalId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Zaal");
                });

            modelBuilder.Entity("backend.Data.Opvoering", b =>
                {
                    b.HasOne("backend.Data.Band", "Band")
                        .WithMany("Opvoeringen")
                        .HasForeignKey("BandId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("backend.Data.Evenement", "Evenement")
                        .WithMany("Opvoeringen")
                        .HasForeignKey("EvenementId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Band");

                    b.Navigation("Evenement");
                });

            modelBuilder.Entity("backend.Data.Ticket", b =>
                {
                    b.HasOne("backend.Data.Evenement", "Evenement")
                        .WithMany("Tickets")
                        .HasForeignKey("EvenementId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("backend.Data.Gebruiker", "Gebruiker")
                        .WithMany("Tickets")
                        .HasForeignKey("GebruikerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Evenement");

                    b.Navigation("Gebruiker");
                });

            modelBuilder.Entity("backend.Data.Deelnemer", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithOne()
                        .HasForeignKey("backend.Data.Deelnemer", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("backend.Data.Gebruiker", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithOne()
                        .HasForeignKey("backend.Data.Gebruiker", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("backend.Data.Band", b =>
                {
                    b.Navigation("DeelnemersMetBands");

                    b.Navigation("Opvoeringen");
                });

            modelBuilder.Entity("backend.Data.Evenement", b =>
                {
                    b.Navigation("Opvoeringen");

                    b.Navigation("Tickets");
                });

            modelBuilder.Entity("backend.Data.Zaal", b =>
                {
                    b.Navigation("Evenementen");
                });

            modelBuilder.Entity("backend.Data.Deelnemer", b =>
                {
                    b.Navigation("DeelnemersMetBands");
                });

            modelBuilder.Entity("backend.Data.Gebruiker", b =>
                {
                    b.Navigation("Tickets");
                });
#pragma warning restore 612, 618
        }
    }
}
