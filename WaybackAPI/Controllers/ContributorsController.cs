using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;
using WaybackAPI.Models;

namespace WaybackAPI.Controllers
{

    [Route("Api/[controller]")]
    [ApiController]
    public class ContributorsController : ControllerBase
    {

        [HttpGet]
        public async Task<IActionResult> GetContributors()
        {

            var contributors = new[]
            {
                new Contributor
                {
                    Name = "AJ Gillard",
                    Id = 1,
                    GraduationYear = 2026,
                    Bio = "Lead Developer: A dedicated developer with a passion for game design.",
                    GitHubSlug = "fuzzlea",
                    LinkedInSlug = "aaron-gillard-670343342",
                    Picture = string.Empty
                },
                new Contributor
                {
                    Name = "Tommy Whitaker",
                    Id = 2,
                    GraduationYear = 2025,
                    Bio = "Story Designer and Team Manager: Specializes in crafting immersive gaming experiences.",
                    GitHubSlug = "drzebr",
                    LinkedInSlug = string.Empty,
                    Picture = string.Empty
                },
                new Contributor
                {
                    Name = "Peyton Sampier",
                    Id = 3,
                    GraduationYear = 2026,
                    Bio = "Artist (Hand Drawn): Enthusiastic about puzzle mechanics and innovative gameplay.",
                    GitHubSlug = "peytosequi",
                    LinkedInSlug = string.Empty,
                    Picture = string.Empty
                },
                new Contributor
                {
                    Name = "Hayden Duletzke",
                    Id = 4,
                    GraduationYear = 2025,
                    Bio = "Artist (Pixel Art): Combines creativity and technical expertise in game development.",
                    GitHubSlug = "Deboossmoo-Code",
                    LinkedInSlug = string.Empty,
                    Picture = string.Empty
                }
            };

            return Ok(contributors);

        }

    }

}