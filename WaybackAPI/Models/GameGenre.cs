using System.ComponentModel.DataAnnotations;

namespace WaybackAPI.Models
{
    public class GameGenre
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int GameId { get; set; }
        public required Game Game { get; set; }
        [Required]
        public int GenreId { get; set; }
        public required Genre Genre { get; set; }
    }
}
