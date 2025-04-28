using WaybackAPI.Interfaces;
using WaybackAPI.Models;

namespace WaybackAPI.Routes
{
    public static class MediaRoutes
    {
        public static void MapMediaRoutes(this IEndpointRouteBuilder routes)
        {
            routes.MapGet("/api/media/thumbnail/{id}", async (Guid id, IMediaService mediaService) =>
            {
                var (fileContent, contentType) = await mediaService.GetThumbnailByIdAsync(id);

                if (fileContent == null || contentType == null)
                    return Results.NotFound();

                return Results.File(fileContent, contentType);
            });

        }
    }
}
