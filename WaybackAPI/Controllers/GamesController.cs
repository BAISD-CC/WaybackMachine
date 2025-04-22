using Microsoft.AspNetCore.Mvc;
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

    }

}
