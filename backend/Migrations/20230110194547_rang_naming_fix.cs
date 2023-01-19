using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class rangnamingfix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rang_Zalen_ZaalId",
                table: "Rang");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Rang",
                table: "Rang");

            migrationBuilder.RenameTable(
                name: "Rang",
                newName: "Rangen");

            migrationBuilder.RenameIndex(
                name: "IX_Rang_ZaalId",
                table: "Rangen",
                newName: "IX_Rangen_ZaalId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Rangen",
                table: "Rangen",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Rangen_Zalen_ZaalId",
                table: "Rangen",
                column: "ZaalId",
                principalTable: "Zalen",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rangen_Zalen_ZaalId",
                table: "Rangen");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Rangen",
                table: "Rangen");

            migrationBuilder.RenameTable(
                name: "Rangen",
                newName: "Rang");

            migrationBuilder.RenameIndex(
                name: "IX_Rangen_ZaalId",
                table: "Rang",
                newName: "IX_Rang_ZaalId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Rang",
                table: "Rang",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Rang_Zalen_ZaalId",
                table: "Rang",
                column: "ZaalId",
                principalTable: "Zalen",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
