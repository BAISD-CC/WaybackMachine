using Microsoft.EntityFrameworkCore;
using WaybackAPI.Interfaces;
using WaybackAPI.Models;

namespace WaybackAPI.Services
{
    /// <summary>
    /// Service class for managing games.
    /// This class contains methods to interact with the game data.
    /// It uses the WaybackAPIContext to perform database operations.
    /// The class implements the IGameService interface.
    /// </summary>
    public class GameService : IGameService
    {
        // Use the database context
        private readonly WaybackAPIContext _context;

        /// <summary>
        /// Constructor for the GameService class.
        /// </summary>
        /// <param name="context"></param>
        public GameService(WaybackAPIContext context)
        {
            // This basically injects the database context into the service class.
            // Which will allow the service class to perform database operations.
            _context = context;
        }

        /// <summary>
        /// Retrieves all games from the database.
        /// </summary>
        /// <returns></returns>
        public async Task<List<Game>> GetAllGamesAsync()
        {
            // Get all games from the database, using the GameContributor table to include the contributors.
            // This will return a list of games with their contributors.
            return await _context.Games
             .Include(g => g.GameContributors)
                 .ThenInclude(gc => gc.Contributor)
             .Include(g => g.GameGenres)
                 .ThenInclude(gg => gg.Genre)
             .ToListAsync();
        }

        /// <summary>
        /// Retrieves a game by its ID.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Task<Game?> GetGameByIdAsync(Guid id)
        {
            // Get a game by its ID from the database, using the GameContributor table to include the contributors.
            // This will return a game with its contributors.
            return _context.Games
                .Include(g => g.GameContributors)
                    .ThenInclude(gc => gc.Contributor)
                .Include(g => g.GameGenres)
                    .ThenInclude(gg => gg.Genre)
                .FirstOrDefaultAsync(g => g.Guid == id);
        }
    }
}
