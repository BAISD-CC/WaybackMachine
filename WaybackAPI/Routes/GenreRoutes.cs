using WaybackAPI.Interfaces;
using WaybackAPI.Models;

namespace WaybackAPI.Routes
{
    public static class GenreRoutes
    {
        public static void MapGenreRoutes(this IEndpointRouteBuilder routes)
        {
            routes.MapGet("/api/genres", async (IGenreService service) =>
            {
                return await service.GetAllGenresAsync();
            });
        }
    }
}
