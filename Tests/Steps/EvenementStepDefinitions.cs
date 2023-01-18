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
        _client = new RestClient("http://localhost:3001/");

        ServicePointManager.ServerCertificateValidationCallback +=
            (sender, cert, chain, sslPolicyErrors) => true;
    }

    [Given("er zijn geen evenementen")]
    public async Task GeenEvenementen()
    {
        _databaseData.Context.Evenementen.RemoveRange(_databaseData.Context.Evenementen);
        await _databaseData.Context.SaveChangesAsync();
    }

    // TODO: This is to test that Specflow works, delete this
    [Given("er is niks aan de hand")]
    public async void NiksAanDeHand()
    {
    }

    // TODO: This is to test that Specflow works, delete this
    [Then("mag alles")]
    public async void AllesGoed()
    {
        Assert.True(true);
    }
}
