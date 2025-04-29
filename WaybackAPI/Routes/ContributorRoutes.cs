using WaybackAPI.Interfaces;
using WaybackAPI.Models;

namespace WaybackAPI.Routes
{
    public static class ContributorRoutes
    {
        public static void MapContributorRoutes(this IEndpointRouteBuilder routes)
        {
            routes.MapGet("/api/contributors", async (IContributorService service) =>
            {
                return await service.GetAllContributorsAsync();
            });

            routes.MapGet("/api/contributors/{id}", async (Guid id, IContributorService service) =>
            {
                var contributor = await service.GetContributorByIdAsync(id);
                return contributor is not null ? Results.Ok(contributor) : Results.NotFound();
            });
        }
    }
}
