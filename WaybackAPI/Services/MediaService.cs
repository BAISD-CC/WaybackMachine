using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WaybackAPI.Interfaces;

namespace WaybackAPI.Services
{
    public class MediaService : IMediaService
    {
        // Use the database context
        private readonly WaybackAPIContext _context;
        // Path to the media folder
        private readonly string mediaPath = Path.Combine(Directory.GetCurrentDirectory(), "Media");

        /// <summary>
        /// Constructor for the MediaService class.
        /// </summary>
        /// <param name="context"></param>
        public MediaService(WaybackAPIContext context)
        {
            // This basically injects the database context into the service class.
            // Which will allow the service class to perform database operations.
            _context = context;
        }

        public async Task<(byte[]? FileContent, string? ContentType)> GetThumbnailByIdAsync(Guid id)
        {
            // Get the game by ID
            var game = await _context.Games.FirstOrDefaultAsync(g => g.Guid == id);
            if (game == null)
                return (null, null);

            var fullPath = Path.Combine(mediaPath, "GameThumbnails", game.ImageUrl);
            if (!System.IO.File.Exists(fullPath))
                return (null, null);

            var bytes = await System.IO.File.ReadAllBytesAsync(fullPath);
            var contentType = Path.GetExtension(fullPath).ToLower() switch
            {
                ".png" => "image/png",
                ".jpg" => "image/jpeg",
                ".jpeg" => "image/jpeg",
                ".gif" => "image/gif",
                _ => "application/octet-stream"
            };

            return (bytes, contentType);
        }

    }
}