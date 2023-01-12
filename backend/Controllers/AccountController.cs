using System.ComponentModel.DataAnnotations;
using backend.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

public class GebruikerMetWachwoord : Gebruiker
{
    public string? Password { get; init; }
}

public class GebruikerLogin
{
    [Required(ErrorMessage = "Username is required")]
    public string? UserName { get; init; }

    [Required(ErrorMessage = "Password is required")]
    public string? Password { get; init; }
}

[Route("api/[controller]")]
[ApiController]
public class AccountController : ControllerBase
{
    private readonly UserManager<Gebruiker> _userManager;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly SignInManager<Gebruiker> _signInManager;

    public AccountController(UserManager<Gebruiker> userManager, RoleManager<IdentityRole> roleManager, SignInManager<Gebruiker> signInManager)
    {
        _userManager = userManager;
        _roleManager = roleManager;
        _signInManager = signInManager;
    }

    [HttpPost]
    [Route("registreer")]
    public async Task<ActionResult<IEnumerable<Gebruiker>>> Registreer([FromBody] GebruikerMetWachwoord gebruikerMetWachwoord)
    {
        var resultaat = await _userManager.CreateAsync(gebruikerMetWachwoord, gebruikerMetWachwoord.Password);
        return !resultaat.Succeeded ? new BadRequestObjectResult(resultaat) : StatusCode(201);
    }
    
    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] GebruikerLogin gebruikerLogin)
    {
        var _user = await _userManager.FindByNameAsync(gebruikerLogin.UserName);

        if (_user != null)
        {
            await _signInManager.SignInAsync(_user, true);
            return Ok();
        }

        return Unauthorized();
    }

}