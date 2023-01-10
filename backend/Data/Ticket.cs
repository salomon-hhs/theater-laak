namespace backend.Data;

public class Ticket
{
    public string Id { get; set; }
    
    public string GebruikerId { get; set; }
    public Gebruiker Gebruiker { get; set; }
    
    public int EvenementId { get; set; }
    public Evenement Evenement { get; set; }
}