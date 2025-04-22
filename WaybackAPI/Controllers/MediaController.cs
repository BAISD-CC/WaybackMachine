using Microsoft.AspNetCore.Mvc;
using WaybackAPI.Models;

namespace WaybackAPI.Controllers
{
   [Route("Route/[controller]")]
   [ApiController]
   public class MediaController : ControllerBase
   {

      private readonly string mediaPath = Path.Combine(Directory.GetCurrentDirectory(), "Media");

      [HttpGet("Api/[controller]/Thumbnail/{_gameId}")]
      public async Task<IActionResult> GetGameThumbnail(int _gameId)
      {

         Game? game;

         var call = await new GamesController().GetGameById(_gameId);

         if (call is OkObjectResult result) { game = result.Value as Game; } else { return NotFound("Game not found"); }

         var fullPath = Path.Combine(mediaPath, "GameThumbnails", game.ImageUrl);

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