using System;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using backend;
using backend.Data;
using TechTalk.SpecFlow;

namespace backend.Tests.Hooks;

[Binding]
public sealed class Hooks
{
    private static IHost? _host;
    private DatabaseData _databaseData;

    public Hooks(DatabaseData databaseData)
    {
        _databaseData = databaseData;
        System.Console.WriteLine("Hooks");
    }

    [BeforeTestRun]
    public static async Task BeforeTestRun()
    {
        System.Console.WriteLine("Hallo?");
        _host = await Program.CreateWebApplication(new string[] { }, true);
        _host.Start();
    }

    [AfterTestRun]
    public static async Task AfterTestRun()
    {
        await _host!.StopAsync();
    }

    [BeforeScenario]
    public async Task BeforeScenario()
    {
        _databaseData._host = _host!;

        System.Console.WriteLine("BeforeScenario");

        // We have to clean the database before we can test
        _databaseData.Context.Gebruikers.RemoveRange(_databaseData.Context.Gebruikers);
        _databaseData.Context.Deelnemers.RemoveRange(_databaseData.Context.Deelnemers);
        _databaseData.Context.Bands.RemoveRange(_databaseData.Context.Bands);
        _databaseData.Context.DeelnemerMetBands.RemoveRange(_databaseData.Context.DeelnemerMetBands);
        _databaseData.Context.Evenementen.RemoveRange(_databaseData.Context.Evenementen);
        _databaseData.Context.Tickets.RemoveRange(_databaseData.Context.Tickets);
        _databaseData.Context.Zalen.RemoveRange(_databaseData.Context.Zalen);
        _databaseData.Context.Rangen.RemoveRange(_databaseData.Context.Rangen);

        await _databaseData.Context.SaveChangesAsync();
    }
    [AfterScenario]
    public void AfterScenario()
    {
        _databaseData.Dispose();
    }
}

public class DatabaseData : IDisposable
{
    public IHost? _host { get; set; }
    private IServiceScope? _scope = null;
    private DatabaseContext? _context = null;

    public DatabaseContext Context
    {
        get
        {
            if (_scope == null)
                _scope = _host.Services.CreateScope();
            if (_context == null)
                _context = _scope.ServiceProvider.GetService<DatabaseContext>() ?? throw new Exception("Cannot find database!");
            return _context;
        }
    }

    public void Dispose()
    {
        if (_context != null)
            _context.Dispose();
        if (_scope != null)
            _scope.Dispose();
    }
}
