using WaybackAPI.Models;

namespace WaybackAPI.Interfaces
{
    /// <summary>
    /// Interface for the GenreService.
    /// This interface defines the methods that the GenreService class must implement.
    /// It is used to manage genre data.
    /// </summary>
    public interface IGenreService
    {
        /// <summary>
        /// Retrieves all genres from the database.
        /// </summary>
        /// <returns></returns>
        Task<List<Genre>> GetAllGenresAsync();
    }
}
