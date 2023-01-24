using System.Net;
using System.Threading.Tasks;
using RestSharp;
using Xunit;
using TechTalk.SpecFlow;
using backend.Tests.Hooks;
using backend.Data;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.Sqlite;

namespace backend.Tests.Steps;

[Binding]
public sealed class EvenementStepDefinitions
{
    private readonly RestClient _client;

    private readonly DatabaseData _databaseData;

    private RestResponse? response;

    public EvenementStepDefinitions(DatabaseData databaseData)
    {
        _databaseData = databaseData;
        _client = new RestClient("https://localhost:5001/");

        ServicePointManager.ServerCertificateValidationCallback +=
            (sender, cert, chain, sslPolicyErrors) => true;
    }

    [Given("niks")]
    public async Task Niks()
    {
        _databaseData.Context.Evenementen.RemoveRange(_databaseData.Context.Evenementen);
        await _databaseData.Context.SaveChangesAsync();
    }

    [Given("evenement met titel (.*) bestaat")]
    public async Task EvenementBestaat(string titel)
    {
        var evenement = new Evenement() { Datum = DateTime.Now, titel = titel, beschrijving = "Beschrijving", Zaal = null, img = "test", alt = "test"};
        await _databaseData.Context.Evenementen.AddAsync(evenement);
        await _databaseData.Context.SaveChangesAsync();
    }

    [When("evenement met titel (.*) wordt aangemaakt")]
    public async Task EvenementMetNaamAanmaken(String titel)
    {
        var mockEvent = new MockEvent() { datum = DateTime.Now, titel = titel, beschrijving = "Beschrijving", zaal = 0, img = "test", alt = "test" };
        var request = new RestRequest("api/Evenement").AddJsonBody(mockEvent);
        response = await _client.PostAsync(request);
    }

    [When("evenement met titel (.*) wordt verwijderd")]
    public async Task EvenementMetTitelVerwijderen(String titel)
    {
        var evenement = _databaseData.Context.Evenementen.First(e => e.titel == titel);
        var request = new RestRequest("api/Evenement/" + evenement.Id);
        response = await _client.DeleteAsync(request);
    }

    [Then("zijn er geen evenementen")]
    public async void ThenGeenEvenementen()
    {
        var count = await _databaseData.Context.Evenementen.CountAsync();
        Assert.Equal(0, count);
    }

    [Then("bestaat er een evenement met titel (.*)")]
    public async void EvenementMetTitelBestaat(String titel)
    {
        var bestaat = await _databaseData.Context.Evenementen.AnyAsync(e => e.titel == titel);
        Assert.True(bestaat);
    }
    
    [Given("zaal met toegankelijkheid (.*) bestaat")]
    public async Task Zaalbestaat(bool toegankelijkheid)
    {
        await _databaseData.Context.Zalen.AddAsync(new Zaal() { Toegankelijk = false });
        await _databaseData.Context.SaveChangesAsync();
    }

    [When("zaal met toegankelijkheid (.*) wordt toegevoegd")]
    public async Task ZaalToevoegen(bool toegankelijkheid)
    {
        var request = new RestRequest("api/Zaal?rang1=10");
        response = await _client.PostAsync(request);
        
    }

    [Then("bestaat er een zaal met toegankelijkheid (.*)")]
    public async Task ZaalBestaat(bool toegankelijkheid)
    {
        var bestaat = await _databaseData.Context.Zalen.AnyAsync(z => z.Toegankelijk == toegankelijkheid);
        Assert.True(bestaat);
    }

}
