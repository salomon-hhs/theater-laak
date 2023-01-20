namespace backend.Data;

public class Band
{
    public int Id { get; set; }
    public string Naam { get; set; }
    public string Logo { get; set; }
    public string? Website { get; set; }
    
    public ICollection<DeelnemerMetBand>? DeelnemersMetBands { get; set; }
    public ICollection<Opvoering>? Opvoeringen { get; set; }
}