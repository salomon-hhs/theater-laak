using System.Net;
using backend.Data;
using backend.Tests.Hooks;
using Microsoft.EntityFrameworkCore;
using RestSharp;
using Xunit;

namespace backend.Tests.Steps;


[Binding]
public sealed class ZaalStepDefinitions
{
    private readonly RestClient _client;

    private readonly DatabaseData _databaseData;

    private RestResponse? response;

    public ZaalStepDefinitions(DatabaseData databaseData)
    {
        _databaseData = databaseData;
        _client = new RestClient("https://localhost:5001/");

        ServicePointManager.ServerCertificateValidationCallback +=
            (sender, cert, chain, sslPolicyErrors) => true;
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