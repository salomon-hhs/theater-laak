using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class ticketrangrelation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "RangId",
                table: "Tickets",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_RangId",
                table: "Tickets",
                column: "RangId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_Rangen_RangId",
                table: "Tickets",
                column: "RangId",
                principalTable: "Rangen",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_Rangen_RangId",
                table: "Tickets");

            migrationBuilder.DropIndex(
                name: "IX_Tickets_RangId",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "RangId",
                table: "Tickets");
        }
    }
}
