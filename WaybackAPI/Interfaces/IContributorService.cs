using WaybackAPI.Models;

namespace WaybackAPI.Interfaces
{
    /// <summary>
    /// Interface for the ContributorService.
    /// This interface defines the methods that the ContributorService class must implement.
    /// It is used to manage contributor data.
    /// </summary>
    public interface IContributorService
    {
        /// <summary>
        /// Retrieves all contributors from the database.
        /// </summary>
        /// <returns></returns>
        Task<List<Contributor>> GetAllContributorsAsync();

        /// <summary>
        /// Retrieves a contributor by its ID.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<Contributor?> GetContributorByIdAsync(Guid id);
    }
}
