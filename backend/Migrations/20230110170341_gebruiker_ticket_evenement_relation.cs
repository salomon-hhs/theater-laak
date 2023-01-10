using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class gebruikerticketevenementrelation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Opvoering_Evenement_EvenementId",
                table: "Opvoering");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Evenement",
                table: "Evenement");

            migrationBuilder.RenameTable(
                name: "Evenement",
                newName: "Evenementen");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Evenementen",
                table: "Evenementen",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Tickets",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    GebruikerId = table.Column<string>(type: "TEXT", nullable: false),
                    EvenementId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tickets", x => new { x.Id, x.EvenementId, x.GebruikerId });
                    table.ForeignKey(
                        name: "FK_Tickets_Evenementen_EvenementId",
                        column: x => x.EvenementId,
                        principalTable: "Evenementen",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Tickets_Gebruikers_GebruikerId",
                        column: x => x.GebruikerId,
                        principalTable: "Gebruikers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_EvenementId",
                table: "Tickets",
                column: "EvenementId");

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_GebruikerId",
                table: "Tickets",
                column: "GebruikerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Opvoering_Evenementen_EvenementId",
                table: "Opvoering",
                column: "EvenementId",
                principalTable: "Evenementen",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Opvoering_Evenementen_EvenementId",
                table: "Opvoering");

            migrationBuilder.DropTable(
                name: "Tickets");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Evenementen",
                table: "Evenementen");

            migrationBuilder.RenameTable(
                name: "Evenementen",
                newName: "Evenement");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Evenement",
                table: "Evenement",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Opvoering_Evenement_EvenementId",
                table: "Opvoering",
                column: "EvenementId",
                principalTable: "Evenement",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
