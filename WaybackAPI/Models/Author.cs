namespace WaybackAPI.Models
{
    public class Author
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Name { get; set; }
        public int GraduationYear { get; set; }
        public string Bio { get; set; }
        public string GitHubSlug{ get; set; }
        public string LinkedInSlug { get; set; }
        public string Picture { get; set; }
    }
}