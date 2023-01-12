using Microsoft.AspNetCore.Identity;

namespace backend.Data;

public class Deelnemer : IdentityUser
{
    public string Omschrijving { get; set; }
    public DateOnly GeboorteDatum { get; set; }
    public string Logo { get; set; }
    
    public ICollection<DeelnemerMetBand> DeelnemersMetBands { get; set; }
}