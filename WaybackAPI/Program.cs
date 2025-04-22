using Microsoft.OpenApi.Models;
using WaybackAPI.Models;
using Microsoft.AspNetCore.Http.Json;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "AllowAllOrigins",
        configurePolicy: policy =>
        {
            policy.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});
builder.Services.Configure<JsonOptions>(options =>
{
    options.SerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
});
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    });
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "BAISD - Wayback Machine",
        Description = "Preserving Code. Inspiring Futures.",
        Version = "v1"
    });
});

var app = builder.Build();

app.UseCors("AllowAllOrigins");

// if (app.Environment.IsDevelopment())
// {
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "BAISD - Wayback Machine v1");
});
// }

app.MapControllers();
app.MapGet("/", () => "Bay-Arenac ISD Career Center - Computer Programming - Wayback Machine API");

// Dummy game data utilizing the new Game and Author models
// var games = new[]
// {
//     new Game
//     {
//         Id = 1,
//         Name = "Deep Down: The Lost City of Atlantis",
//         Description = "A thrilling adventure puzzle game set in the mythical city of Atlantis.",
//         Authors = new List<Author>
//         {
//             new Author
//             {
//                 Name = "AJ Gillard",
//                 GraduationYear = 2026,
//                 Bio = "Lead Developer: A dedicated developer with a passion for game design.",
//                 GitHubSlug = "fuzzlea",
//                 LinkedInSlug = "aaron-gillard-670343342",
//                 Picture = string.Empty
//             },
//             new Author
//             {
//                 Name = "Tommy Whitaker",
//                 GraduationYear = 2025,
//                 Bio = "Story Designer and Team Manager: Specializes in crafting immersive gaming experiences.",
//                 GitHubSlug = "drzebr",
//                 LinkedInSlug = string.Empty,
//                 Picture = string.Empty
//             },
//             new Author
//             {
//                 Name = "Peyton Sampier",
//                 GraduationYear = 2026,
//                 Bio = "Artist (Hand Drawn): Enthusiastic about puzzle mechanics and innovative gameplay.",
//                 GitHubSlug = "peytosequi",
//                 LinkedInSlug = string.Empty,
//                 Picture = string.Empty
//             },
//             new Author
//             {
//                 Name = "Hayden Duletzke",
//                 GraduationYear = 2025,
//                 Bio = "Artist (Pixel Art): Combines creativity and technical expertise in game development.",
//                 GitHubSlug = "Deboossmoo-Code",
//                 LinkedInSlug = string.Empty,
//                 Picture = string.Empty
//             }
//         },
//         Year = 2024,
//         Genres = new List<Genre> { Genre.Puzzle, Genre.Adventure },
//         ImageUrl = "test.png",
//         RepoUrl = "fuzzlea/Deep-Down-The-Lost-City-of-Atlantis/archive/refs/heads/main.zip",
//         ExeDir = "game.exe"
//     }
// };

// app.MapGet("/games", () => Results.Json(games));
app.MapGet("/categories", () => Genre.GetNames(typeof(Genre)));

app.Run();
