using System.ComponentModel.DataAnnotations;

namespace WaybackAPI.Models
{
    public class Genre
    {
        [Key]
        public int Id { get; set; }
        public required string Name { get; set; }
    }

}