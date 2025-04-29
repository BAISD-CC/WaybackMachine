using Microsoft.AspNetCore.Mvc;
using WaybackAPI.Models;

namespace WaybackAPI.Interfaces
{

    public interface IMediaService
    {
        /// <summary>
        /// Retrieves a game thumbnail by its ID.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<(byte[]? FileContent, string? ContentType)> GetThumbnailByIdAsync(Guid id);
    }
}
