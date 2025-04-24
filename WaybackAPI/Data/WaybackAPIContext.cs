using Microsoft.EntityFrameworkCore;
using WaybackAPI.Models;

public class WaybackAPIContext : DbContext
{

   public WaybackAPIContext(DbContextOptions<WaybackAPIContext> options) : base(options) { }

   public DbSet<Game> Games { get; set; }
   public DbSet<Game> Contributors { get; set; }
   public DbSet<Game> GameContributors { get; set; }

   protected override void OnModelCreating(ModelBuilder modelBuilder)
   {

      modelBuilder.Entity<GameContributor>().HasKey(gc => new { gc.GameId, gc.ContributorId });
      // im going to need help, chat doesn't reassure me enough of a safe implementation

   }

}