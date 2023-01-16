using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ZaalController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public ZaalController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Zaal
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Zaal>>> GetZalen()
        {
          if (_context.Zalen == null)
          {
              return NotFound();
          }
            return await _context.Zalen.ToListAsync();
        }

        // GET: api/Zaal/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Zaal>> GetZaal(int id)
        {
          if (_context.Zalen == null)
          {
              return NotFound();
          }
            var zaal = await _context.Zalen.FindAsync(id);

            if (zaal == null)
            {
                return NotFound();
            }

            return zaal;
        }

        // PUT: api/Zaal/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutZaal(int id, Zaal zaal)
        {
            if (id != zaal.Id)
            {
                return BadRequest();
            }

            _context.Entry(zaal).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ZaalExists(id))
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

        // POST: api/Zaal
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754

        // DELETE: api/Zaal/5

        [HttpPost]
        public async Task<ActionResult<Zaal>> PostZaal([FromQuery] int rang1, [FromQuery] int? rang2, [FromQuery] int? rang3)
        {
            Console.WriteLine(rang1);
            List<int> c = new List<int>();

            c.Add(rang1);
            if (rang2 != null)
            {
                c.Add((int) rang2);
            }

            if (rang3 != null)
            {
                c.Add((int) rang3);
            }
            if (_context.Zalen == null)
            {
                return Problem("Entity set 'DatabaseContext.Zalen'  is null.");
            }
            Zaal zaal = new Zaal() {Toegankelijk = true};
            foreach (int i in c)
            {
                Rang r = new Rang() { Zaal = zaal, Capaciteit = i };
                _context.Rangen.Add(r);
                zaal.Rangen.Add(r);
            }
            _context.Zalen.Add(zaal);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetZaal", new { id = zaal.Id }, zaal);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteZaal(int id)
        {
            if (_context.Zalen == null)
            {
                return NotFound();
            }
            var zaal = await _context.Zalen.FindAsync(id);
            if (zaal == null)
            {
                return NotFound();
            }

            _context.Zalen.Remove(zaal);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ZaalExists(int id)
        {
            return (_context.Zalen?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
