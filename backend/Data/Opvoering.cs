namespace backend.Data;

public class Opvoering
{
    public int BandId { get; set; }
    public Band Band { get; set; }
    
    public int EvenementId { get; set; }
    public Evenement Evenement { get; set; }
}