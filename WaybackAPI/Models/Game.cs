using System.ComponentModel.DataAnnotations;

namespace WaybackAPI.Models
{
   public class Game
   {
      [Key]
      public int Id { get; set; }
      [Required]
      public Guid Guid { get; set; }
      [Required]
      public required string Name { get; set; }
      public required string Description { get; set; }
        public List<GameContributor> GameContributors { get; set; } = new();
        public int Year { get; set; }
        public List<GameGenre> GameGenres { get; set; } = new();
        public required string ImageUrl { get; set; }
      public required string RepoUrl { get; set; }
      public required string ExeDir { get; set; }
   }
}
