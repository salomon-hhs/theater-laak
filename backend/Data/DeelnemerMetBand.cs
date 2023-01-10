namespace backend.Data;

public class DeelnemerMetBand
{
    public int BandId { get; set; }
    public Band Band { get; set; }
    
    public string DeelnemerId { get; set; }
    public Deelnemer Deelnemer { get; set; }
}