using System.ComponentModel.DataAnnotations;
using WaybackAPI.Models;

public class Contributor
{
    [Key]
    public required int Id { get; set; }
    [Required]
    public Guid Guid { get; set; } = Guid.NewGuid();
    [Required]
    public required string Name { get; set; }
    public List<GameContributor> GameContributors { get; set; } = new();
    public int? GraduationYear { get; set; }
    public string? Bio { get; set; }
    public string? GitHubSlug { get; set; }
    public string? LinkedInSlug { get; set; }
    public string? Picture { get; set; }
}
