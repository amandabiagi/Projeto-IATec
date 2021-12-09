using Microsoft.EntityFrameworkCore.Migrations;

namespace CarrosAPI.Migrations
{
    public partial class alterandoOsTiposDosCamposTipoCombustivelETipoCambioCaraInt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "TipoCombustivel",
                table: "Carros",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<int>(
                name: "TipoCambio",
                table: "Carros",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "TipoCombustivel",
                table: "Carros",
                type: "text",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "TipoCambio",
                table: "Carros",
                type: "text",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }
    }
}
