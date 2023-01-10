using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class zaalevenementrelation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ZaalId",
                table: "Evenementen",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Zaalen",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Zaalen", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Evenementen_ZaalId",
                table: "Evenementen",
                column: "ZaalId");

            migrationBuilder.AddForeignKey(
                name: "FK_Evenementen_Zaalen_ZaalId",
                table: "Evenementen",
                column: "ZaalId",
                principalTable: "Zaalen",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Evenementen_Zaalen_ZaalId",
                table: "Evenementen");

            migrationBuilder.DropTable(
                name: "Zaalen");

            migrationBuilder.DropIndex(
                name: "IX_Evenementen_ZaalId",
                table: "Evenementen");

            migrationBuilder.DropColumn(
                name: "ZaalId",
                table: "Evenementen");
        }
    }
}
