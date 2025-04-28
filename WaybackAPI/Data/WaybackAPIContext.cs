using Microsoft.EntityFrameworkCore;
using WaybackAPI.Models;

public class WaybackAPIContext : DbContext
{
    public WaybackAPIContext(DbContextOptions<WaybackAPIContext> options) : base(options) { }

    public DbSet<Game> Games { get; set; }
    public DbSet<Genre> Genres { get; set; }
    public DbSet<Contributor> Contributors { get; set; }
    public DbSet<GameContributor> GameContributors { get; set; }
    public DbSet<GameGenre> GameGenres { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configure GameContributor composite key
        modelBuilder.Entity<GameContributor>()
            .HasKey(gc => gc.Id);

        // Configure GameContributor relationships
        modelBuilder.Entity<GameContributor>()
            .HasOne(gc => gc.Game)
            .WithMany(g => g.GameContributors)
            .HasForeignKey(gc => gc.GameId);

        modelBuilder.Entity<GameContributor>()
            .HasOne(gc => gc.Contributor)
            .WithMany(c => c.GameContributors)
            .HasForeignKey(gc => gc.ContributorId);

        modelBuilder.Entity<GameGenre>()
            .HasKey(gg => gg.Id);

        modelBuilder.Entity<GameGenre>()
            .HasOne(gg => gg.Game)
            .WithMany(g => g.GameGenres)
            .HasForeignKey(gg => gg.GameId);

        modelBuilder.Entity<GameGenre>()
            .HasOne(gg => gg.Genre)
            .WithMany()
            .HasForeignKey(gg => gg.GenreId);


    }
}
