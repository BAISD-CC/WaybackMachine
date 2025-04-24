using System.ComponentModel.DataAnnotations;

namespace WaybackAPI.Models
{
   public class Contributor
   {
      [Required]
      public Guid Guid { get; set; } = Guid.NewGuid();
      [Required]
      public required int Id { get; set; }
      public required string Name { get; set; }
      public ICollection<Game>? Games { get; set; } = new List<Game>();
      public int? GraduationYear { get; set; }
      public string? Bio { get; set; }
      public string? GitHubSlug { get; set; }
      public string? LinkedInSlug { get; set; }
      public string? Picture { get; set; }
   }
}