namespace backend.Data;

public class Evenement
{
    public int Id { get; set; }
    public DateTime Datum { get; set; }
    
    public Zaal Zaal { get; set; }
        
    public ICollection<Opvoering> Opvoeringen { get; set; }
    public ICollection<Ticket> Tickets { get; set; }
}