using CarrosAPI.Modals;
using Microsoft.EntityFrameworkCore;


namespace CarrosAPI.Data
{
    public class CarroContext : DbContext
    {
        public CarroContext(DbContextOptions<CarroContext> opt) : base (opt)
        {

        }

        public DbSet<Carro> Carros { get; set; }


    }
}
