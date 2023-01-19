namespace backend.Data;

public class Evenement
{
    public int Id { get; set; }
    public DateTime Datum { get; set; }
    public string titel { get; set; }
    public string beschrijving { get; set; }

    public int ZaalId { get; set; }
    public Zaal Zaal { get; set; }
        
    public ICollection<Opvoering>? Opvoeringen { get; set; }
    public ICollection<Ticket>? Tickets { get; set; }
}