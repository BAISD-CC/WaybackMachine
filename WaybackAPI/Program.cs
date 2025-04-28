using Microsoft.OpenApi.Models;
using WaybackAPI.Models;
using Microsoft.AspNetCore.Http.Json;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using WaybackAPI.Routes;
using WaybackAPI.Interfaces;
using WaybackAPI.Services;

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

builder.Services.AddDbContext<WaybackAPIContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("KruskieLab")));

builder.Services.AddScoped<IGameService, GameService>();
builder.Services.AddScoped<IContributorService, ContributorService>();
builder.Services.AddScoped<IMediaService, MediaService>();

var app = builder.Build();

app.UseCors("AllowAllOrigins");

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "BAISD - Wayback Machine v1");
});

app.MapGet("/", () => "Bay-Arenac ISD Career Center - Computer Programming - Wayback Machine API");

app.MapGameRoutes();
app.MapContributorRoutes();
app.MapMediaRoutes();

app.Run();
