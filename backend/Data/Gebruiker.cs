using Microsoft.AspNetCore.Identity;

namespace backend.Data;

public class Gebruiker : IdentityUser
{
    public int AantalGedoneerd { get; set; }
    
    public ICollection<Ticket> Tickets { get; set; }

    public bool IsBegunstiger()
    {
        throw new NotImplementedException();
    }
}