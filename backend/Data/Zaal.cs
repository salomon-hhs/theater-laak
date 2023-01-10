namespace backend.Data;

public class Zaal
{
    public int Id { get; set; }
    public bool Toegankelijk { get; set; }
    public ICollection<Evenement> Evenementen { get; set; }
    public ICollection<Rang> Rangen { get; set; }
}