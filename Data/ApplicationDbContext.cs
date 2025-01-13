using Microsoft.EntityFrameworkCore;
using InventarioAvemrSqlite.Models;

namespace InventarioAvemrSqlite.Data
{
    public class ApplicationDbContext : DbContext
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Item> Items { get; set; }
    }
}
