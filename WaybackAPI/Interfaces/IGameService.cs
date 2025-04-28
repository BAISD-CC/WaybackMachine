using WaybackAPI.Models;

namespace WaybackAPI.Interfaces
{
    /// <summary>
    /// Interface for the GameService.
    /// This interface defines the methods that the GameService class must implement.
    /// It is used to manage game data.
    /// </summary>
    public interface IGameService
    {
        /// <summary>
        /// Retrieves all games from the database.
        /// </summary>
        /// <returns></returns>
        Task<List<Game>> GetAllGamesAsync();

        /// <summary>
        /// Retrieves a game by its ID.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<Game?> GetGameByIdAsync(Guid id);
    }
}
