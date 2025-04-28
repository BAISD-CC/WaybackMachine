using System.ComponentModel.DataAnnotations;

namespace WaybackAPI.Models
{

    public class GameContributor
    {
        [Key]
        public required int Id { get; set; }
        [Required]
        public required int GameId { get; set; }
        [Required]
        public required Game Game { get; set; }
        [Required]
        public required int ContributorId { get; set; }
        [Required]
        public required Contributor Contributor { get; set; }
    }
}