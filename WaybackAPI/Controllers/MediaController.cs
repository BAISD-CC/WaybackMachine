using Microsoft.AspNetCore.Mvc;
using WaybackAPI.Models;

namespace WaybackAPI.Controllers
{
    [Route("Route/[controller]")]
    [ApiController]
    public class MediaController : ControllerBase
    {

        private readonly string mediaPath = Path.Combine(Directory.GetCurrentDirectory(), "Media");

        [HttpGet("Api/[controller]/Thumbnail/{game}")]
        public async Task<IActionResult> GetGameThumbnail(string game)
        {

            var fullPath = Path.Combine(mediaPath, "GameThumbnails", game);

            if (!System.IO.File.Exists(fullPath))
                return NotFound();

            var bytes = await System.IO.File.ReadAllBytesAsync(fullPath);
            var contentType = Path.GetExtension(fullPath).ToLower() switch
            {
                ".png" => "image/png",
                ".jpg" => "image/jpeg",
                ".jpeg" => "image/jpeg",
                ".gif" => "image/gif",
                _ => "application/octet-stream"
            };

            return File(bytes, contentType);

        }

    }

}