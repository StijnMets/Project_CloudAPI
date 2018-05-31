using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

[Route("api/v1/wielders")]

public class LightsaberWielderController : Controller
{
    private readonly LibraryContext context;

    public LightsaberWielderController(LibraryContext context)
    {
        this.context = context;
    }

    [HttpGet]
    public List<LightSaberWielder> GetAllWielders()
    {
        return context.LightSaberWielders.ToList();
    }

    [Route("{id}")]
    [HttpGet]
    public IActionResult GetWielder(int id)
    {
        var wielder = context.LightSaberWielders.Find(id);
        if(wielder == null)
            return NotFound();
        
        return Ok(wielder);
    }

    public List<LightSaberWielder> GetAllWielders(string name, string color, int? page, string sort)
    {
        IQueryable<LightSaberWielder> query = context.LightSaberWielders;

        if (!string.IsNullOrWhiteSpace(name))
            query = query.Where(d => d.Name == name);
        if (!string.IsNullOrWhiteSpace(color))
            query = query.Where(d => d.Color == color);
          
    }
}