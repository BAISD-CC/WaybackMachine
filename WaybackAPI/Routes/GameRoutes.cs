using WaybackAPI.Interfaces;
using WaybackAPI.Models;

namespace WaybackAPI.Routes
{
    public static class GameRoutes
    {
        public static void MapGameRoutes(this IEndpointRouteBuilder routes)
        {
            routes.MapGet("/api/games", async (IGameService service) =>
            {
                return await service.GetAllGamesAsync();
            });

            routes.MapGet("/api/games/{id}", async (Guid id, IGameService service) =>
            {
                var game = await service.GetGameByIdAsync(id);
                return game is not null ? Results.Ok(game) : Results.NotFound();
            });
        }
    }
}
