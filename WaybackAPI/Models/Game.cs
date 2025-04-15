namespace WaybackAPI.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<Author> Authors { get; set; } = new List<Author>();
        public int Year { get; set; }
        public List<Genre> Genres { get; set; } = new List<Genre>();
        public string ImageUrl { get; set; }
        public string RepoUrl { get; set; }
        public string ExeDir { get; set; }
    }
}
