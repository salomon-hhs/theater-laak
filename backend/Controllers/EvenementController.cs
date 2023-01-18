using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;

public class MockEvent
{
    public DateTime d;
    public int z;
}

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EvenementController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public EvenementController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Evenement
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Evenement>>> GetEvenementen()
        {
          if (_context.Evenementen == null)
          {
              return NotFound();
          }
            return await _context.Evenementen.ToListAsync();
        }

        // GET: api/Evenement/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Evenement>> GetEvenement(int id)
        {
          if (_context.Evenementen == null)
          {
              return NotFound();
          }
            var evenement = await _context.Evenementen.FindAsync(id);

            if (evenement == null)
            {
                return NotFound();
            }

            return evenement;
        }

        // PUT: api/Evenement/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEvenement(int id, Evenement evenement)
        {
            if (id != evenement.Id)
            {
                return BadRequest();
            }

            _context.Entry(evenement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EvenementExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Evenement
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754

        [HttpPost]
        public async Task<ActionResult<Evenement>> PostEvenement(MockEvent e)
        {
            if (_context.Evenementen == null)
            {
                return Problem("Entity set 'DatabaseContext.Evenementen'  is null.");
            }

            Evenement evenement = new Evenement() { Datum = e.d, Zaal = _context.Zalen.Find(e.z) };
            _context.Evenementen.Add(evenement);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEvenement", new { id = evenement.Id }, evenement);
        }

        // DELETE: api/Evenement/5

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvenement(int id)
        {
            if (_context.Evenementen == null)
            {
                return NotFound();
            }
            var evenement = await _context.Evenementen.FindAsync(id);
            if (evenement == null)
            {
                return NotFound();
            }

            _context.Evenementen.Remove(evenement);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EvenementExists(int id)
        {
            return (_context.Evenementen?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}