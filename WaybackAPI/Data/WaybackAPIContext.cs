using Microsoft.EntityFrameworkCore;
using WaybackAPI.Models;

public class WaybackAPIContext : DbContext
{

    public WaybackAPIContext(DbContextOptions<WaybackAPIContext> options) : base(options) { }

    public DbSet<Game> Games { get; set; }

}