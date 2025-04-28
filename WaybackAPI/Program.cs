using Microsoft.OpenApi.Models;
using WaybackAPI.Models;
using Microsoft.AspNetCore.Http.Json;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

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

// app.MapGet("/games", () => Results.Json(games));
app.MapGet("/categories", () => Genre.GetNames(typeof(Genre)));

app.Run();
