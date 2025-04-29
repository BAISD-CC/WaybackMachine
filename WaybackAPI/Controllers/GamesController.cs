using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;
using WaybackAPI.Models;

namespace WaybackAPI.Controllers
{
   [Route("Api/[controller]")]
   [ApiController]
   public class GamesController : ControllerBase
   {

      [HttpGet]
      public async Task<IActionResult> GetGames()
      {

         var games = new[]
         {
            new Game
            {
               Id = 1,
               Guid = Guid.NewGuid(),
               Name = "Deep Down: The Lost City of Atlantis",
               Description = "Explore the lost city of Atlantis in this thrilling puzzle adventure. Solve ancient mysteries, uncover hidden secrets, and navigate stunning ruins to piece together the secrets of a forgotten civilization.",
               Contributors = null,
               Year = 2024,
               Genres = new List<Genre> { Genre.Puzzle, Genre.Adventure },
               ImageUrl = "Tommy's-Last-Braincell.png",
               RepoUrl = "fuzzlea/Deep-Down-The-Lost-City-of-Atlantis/archive/refs/heads/main.zip",
               ExeDir = "game.exe"
            }
         };

         return Ok(games);

      }

      [HttpGet("/Api/[controller]/{_id}")]
      public async Task<IActionResult> GetGameById(int _id)
      {

         var call = await GetGames();

         if (call is OkObjectResult okResult)
         {

            var games = okResult.Value as IEnumerable<Game>;

            if (games == null)
            {
               return StatusCode(500, "Failed to parse game list.");
            }

            var game = games.FirstOrDefault(g => g.Id == _id);

            if (game != null)
            {
               return Ok(game);
            }
            else
            {
               return NotFound($"Game with Guid {_id} not found.");
            }

         }

         return StatusCode(500, "Unexpected error occurred.");

      }

   }

}