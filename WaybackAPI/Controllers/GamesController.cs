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
                    Description = "A thrilling adventure puzzle game set in the mythical city of Atlantis.",
                    Authors = new List<Author>
                    {
                        new Author
                        {
                            Name = "AJ Gillard",
                            GraduationYear = 2026,
                            Bio = "Lead Developer: A dedicated developer with a passion for game design.",
                            GitHubSlug = "fuzzlea",
                            LinkedInSlug = "aaron-gillard-670343342",
                            Picture = string.Empty
                        },
                        new Author
                        {
                            Name = "Tommy Whitaker",
                            GraduationYear = 2025,
                            Bio = "Story Designer and Team Manager: Specializes in crafting immersive gaming experiences.",
                            GitHubSlug = "drzebr",
                            LinkedInSlug = string.Empty,
                            Picture = string.Empty
                        },
                        new Author
                        {
                            Name = "Peyton Sampier",
                            GraduationYear = 2026,
                            Bio = "Artist (Hand Drawn): Enthusiastic about puzzle mechanics and innovative gameplay.",
                            GitHubSlug = "peytosequi",
                            LinkedInSlug = string.Empty,
                            Picture = string.Empty
                        },
                        new Author
                        {
                            Name = "Hayden Duletzke",
                            GraduationYear = 2025,
                            Bio = "Artist (Pixel Art): Combines creativity and technical expertise in game development.",
                            GitHubSlug = "Deboossmoo-Code",
                            LinkedInSlug = string.Empty,
                            Picture = string.Empty
                        }
                    },
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