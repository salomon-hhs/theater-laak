using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;

public class TicketInfo
{
    [Required(ErrorMessage = "EventId is required")]
    public int EventId { get; set; }
    
    [Required(ErrorMessage = "UserId is required")]
    public string UserId { get; set; }
    
    [Required(ErrorMessage = "Rank number is required")]
    public int rank { get; set; }
}

public class UserEvent
{
    [Required(ErrorMessage = "EventId is required")]
    public int EventId { get; set; }
    
    [Required(ErrorMessage = "UserId is required")]
    public string UserId { get; set; }
}

namespace backend.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public TicketController(DatabaseContext databaseContext)
        {
            _context = databaseContext;
        }
        
        

        [HttpPost("addTicket")]
        public async Task<ActionResult> PostEvenement([FromBody] TicketInfo t)
        {

            if (_context.Rangen == null || _context.Evenementen == null)
            {
                return NotFound();
            }
            
            Rang? rank = GetRankByTicketInfo(t);
            Evenement? e = _context.Evenementen.Find(t.EventId);

            if (rank == null || e == null)
            {
                return NotFound();
            }
            
            int id = _context.Tickets.Count();

            int number = _context.Tickets.Count(o => o.EvenementId == e.Id && o.Rang == rank);

            if (number >= rank.Capaciteit)
            {
                return BadRequest("Rank is at capacity");
            }

            Ticket ticket = new Ticket()
            {
                Evenement = e, EvenementId = e.Id, Gebruiker = _context.Gebruikers.Find(t.UserId),
                GebruikerId = t.UserId, Rang = rank , Id = id
            };
            _context.Tickets.Add(ticket);
            await _context.SaveChangesAsync();
            
            return CreatedAtAction("GetTicket", new { id = ticket.Id }, ticket);
        }
        
        [HttpGet]
        public async Task<ActionResult<ICollection<Ticket>>> GetTickets(UserEvent e)
        {
            if (_context.Tickets == null || !_context.Tickets.Any())
            {
                return NotFound();
            }

            var result = _context.Tickets.Where(o => o.GebruikerId == e.UserId && o.EvenementId == e.EventId).ToList();
            if (!result.Any())
            {
                return NotFound();
            }

            return result;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Ticket>> GetTicket(int id)
        {
            if (_context.Tickets == null)
            {
                return NotFound();
            }
            var ticket = await _context.Tickets.FindAsync(id);
            
            if (ticket == null)
            {
                return NotFound();
            }
            
            return ticket;

        }

        [HttpDelete]
        public async Task<ActionResult> DeleteTicket([FromBody] TicketInfo t)
        {
            if (_context.Tickets == null || !_context.Tickets.Any())
            {
                return NotFound();
            }
            
            Rang rank = GetRankByTicketInfo(t);

            var ticket = await _context.Tickets
                .Where(o => o.GebruikerId == t.UserId && o.EvenementId == t.EventId && o.Rang == rank).OrderBy(o => o.Id).LastAsync();

            if (ticket == null)
            {
                return NotFound();
            }

            _context.Tickets.Remove(ticket);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        private Rang? GetRankByTicketInfo(TicketInfo t)
        {
            if (_context.Evenementen == null)
            {
                return null;
            }
            
            Evenement e = _context.Evenementen.Find(t.EventId);

            if (e == null)
            {
                return null;
            }
            
            int zaalId = e.ZaalId;

            var ranks = _context.Rangen.Where(r => r.Zaal.Id == zaalId).ToList();

            Rang? rank = ranks[t.rank - 1];

            return rank;
        }
    }
}