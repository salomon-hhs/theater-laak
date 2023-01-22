namespace backend.Data;

public class Rang
{
    public int Id { get; set; }
    public int Capaciteit { get; set; }
    
    public int ZaalId { get; set; }
    public Zaal Zaal { get; set; }
}