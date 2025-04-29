using Microsoft.EntityFrameworkCore;
using WaybackAPI.Interfaces;
using WaybackAPI.Models;

namespace WaybackAPI.Services
{
    /// <summary>
    /// Service class for managing contributors.
    /// This class contains methods to interact with the contributor data.
    /// It uses the WaybackAPIContext to perform database operations.
    /// The class implements the IContributorService interface.
    /// </summary>
    public class ContributorService : IContributorService
    {
        // Use the database context
        private readonly WaybackAPIContext _context;

        /// <summary>
        /// Constructor for the ContributorService class.
        /// </summary>
        /// <param name="context"></param>
        public ContributorService(WaybackAPIContext context)
        {
            // This basically injects the database context into the service class.
            // Which will allow the service class to perform database operations.
            _context = context;
        }

        /// <summary>
        /// Retrieves all contributors from the database.
        /// </summary>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public Task<List<Contributor>> GetAllContributorsAsync()
        {
            // Get all contributors from the database, using the GameContributor table to include the games.
            // This will return a list of contributors with their games.
            return _context.Contributors
                .Include(c => c.GameContributors)
                    .ThenInclude(gc => gc.Game)
                .ToListAsync();
        }

        /// <summary>
        /// Retrieves a contributor by its ID.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Task<Contributor?> GetContributorByIdAsync(Guid id)
        {
            // Get a contributor by its ID from the database, using the GameContributor table to include the games.
            // This will return a contributor with its games.
            return _context.Contributors
                .Include(c => c.GameContributors)
                    .ThenInclude(gc => gc.Game)
                .FirstOrDefaultAsync(c => c.Guid == id);
        }
    }
}
