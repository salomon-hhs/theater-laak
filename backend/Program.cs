using System.Text.Json.Serialization;
using backend.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

public static class Program
{
    public static async Task<WebApplication> CreateWebApplication(string[] args, bool testing)
    {
        var builder = WebApplication.CreateBuilder(args);

        if (testing)
            builder.Services.AddDbContext<DatabaseContext>(o => o.UseInMemoryDatabase("laak"));
        else
            builder.Services.AddDbContext<DatabaseContext>(o => o.UseSqlite("data source=laak.db"));

        // Add services to the container.
        System.Console.WriteLine("Setting up services...");

        builder.Services.AddControllers()
            .AddApplicationPart(typeof(Program).Assembly)
            .AddControllersAsServices();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddIdentity<Gebruiker, IdentityRole>()
        .AddEntityFrameworkStores<DatabaseContext>()
        .AddDefaultTokenProviders()
        .AddRoles<IdentityRole>()
        .AddRoleManager<RoleManager<IdentityRole>>();
        
        builder.Services.AddAuthentication();

        builder.Services.AddControllers().AddJsonOptions(x =>
            x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

        var app = builder.Build();

        if (!testing) {
            using (var scope = app.Services.CreateScope())
            using (var context = scope.ServiceProvider.GetService<DatabaseContext>()) {
                await context.Database.EnsureCreatedAsync();
                await context.Database.MigrateAsync();
            }
        }

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllers();

        app.UseCors((bob) =>
        {
            bob.AllowAnyHeader();
            bob.AllowAnyOrigin();
            bob.AllowAnyMethod();
        });

        return app;
    }

    public static async Task Main(string[] args)
    {
        (await CreateWebApplication(args, false)).Run();
    }
}
