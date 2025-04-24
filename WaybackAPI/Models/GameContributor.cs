using System.ComponentModel.DataAnnotations;

namespace WaybackAPI.Models
{

   public class GameContributor
   {

      [Required]
      public required int GameId { get; set; }
      [Required]
      public required int ContributorId { get; set; }

      public required Game Game { get; set; }
      public required Contributor Contributor { get; set; }

   }

}