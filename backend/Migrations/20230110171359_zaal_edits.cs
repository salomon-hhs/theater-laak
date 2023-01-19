using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class zaaledits : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Evenementen_Zaalen_ZaalId",
                table: "Evenementen");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Zaalen",
                table: "Zaalen");

            migrationBuilder.RenameTable(
                name: "Zaalen",
                newName: "Zalen");

            migrationBuilder.AddColumn<bool>(
                name: "Toegankelijk",
                table: "Zalen",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Zalen",
                table: "Zalen",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Evenementen_Zalen_ZaalId",
                table: "Evenementen",
                column: "ZaalId",
                principalTable: "Zalen",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Evenementen_Zalen_ZaalId",
                table: "Evenementen");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Zalen",
                table: "Zalen");

            migrationBuilder.DropColumn(
                name: "Toegankelijk",
                table: "Zalen");

            migrationBuilder.RenameTable(
                name: "Zalen",
                newName: "Zaalen");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Zaalen",
                table: "Zaalen",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Evenementen_Zaalen_ZaalId",
                table: "Evenementen",
                column: "ZaalId",
                principalTable: "Zaalen",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
