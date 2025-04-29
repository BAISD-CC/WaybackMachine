using Microsoft.EntityFrameworkCore;
using WaybackAPI.Interfaces;
using WaybackAPI.Models;

namespace WaybackAPI.Services
{
    /// <summary>
    /// GenreService class that implements the IGenreService interface.
    /// This class is responsible for managing genre data.
    /// It interacts with the database to perform CRUD operations on genres.
    /// </summary>
    public class GenreService : IGenreService
    {
        // Use the database context
        private readonly WaybackAPIContext _context;

        /// <summary>
        /// Constructor for the GenreService class.
        /// </summary>
        /// <param name="context"></param>
        public GenreService(WaybackAPIContext context)
        {
            // This basically injects the database context into the service class.
            // Which will allow the service class to perform database operations.
            _context = context;
        }

        /// <summary>
        /// Retrieves all genres from the database.
        /// </summary>
        /// <returns></returns>
        public async Task<List<Genre>> GetAllGenresAsync()
        {
            return await _context.Genres
                .ToListAsync();
        }
    }
}
