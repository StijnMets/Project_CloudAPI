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
    public List<LightSaberWielder> GetAllWielders(string name, string color, int? page, string sort, string dir = "asc", int length = 4)
    {
        IQueryable<LightSaberWielder> query = context.LightSaberWielders
                                                .Include(d => d.Affiliation);
                                                

        if (!string.IsNullOrWhiteSpace(name))
            query = query.Where(d => d.Name == name);
        if (!string.IsNullOrWhiteSpace(color))
            query = query.Where(d => d.Color == color);

        if (!string.IsNullOrWhiteSpace(sort))
        {
            switch(sort)
            {
                case "color":
                    if(dir == "asc")
                        query = query.OrderBy(d => d.Color);
                    else if(dir == "desc")
                        query = query.OrderByDescending(d => d.Color);
                        break;
                case "name":
                    if(dir == "asc")
                        query = query.OrderBy(d => d.Name);
                    else if(dir == "desc")
                        query = query.OrderByDescending(d => d.Name);
                        break;
                case "affiliation":
                    if(dir == "asc")
                        query = query.OrderBy(d => d.Affiliation.Name);
                    else if(dir == "desc")
                        query = query.OrderByDescending(d => d.Affiliation.Name);
                        break;                        
            }
        }

        if (page.HasValue)
            query = query.Skip(page.Value * length);
        query = query.Take(length);

        return query.ToList();
          
    }

    [Route("{id}")]
    [HttpGet]
    public IActionResult GetWielder(int id)
    {
        var wielder = context.LightSaberWielders
                        .Include(d => d.Affiliation)
                        .SingleOrDefault(d => d.Id == id);

        if (wielder == null)
            return NotFound();
        
        return Ok(wielder);
    }   

    [Route("{id}/affiliation")]
    [HttpGet]
    public IActionResult GetAffiliationForWielder(int id)
    {
        var wielder = context.LightSaberWielders
                        .Include(d => d.Affiliation)
                        .SingleOrDefault(d => d.Id == id);
        if (wielder == null)
            return NotFound();
        
        return Ok(wielder.Affiliation);
    }

    [HttpPost]
    public IActionResult CreateWielder([FromBody] LightSaberWielder newWielder)
    {
        context.LightSaberWielders.Add(newWielder);
        context.SaveChanges();

        return Created("", newWielder);
    }

    [HttpPut]
    public IActionResult UpdateWielder([FromBody] LightSaberWielder updateWielder)
    {
        var orgWielder = context.LightSaberWielders.Find(updateWielder.Id);
        if(orgWielder == null)
            return NotFound();
        
        orgWielder.Name = updateWielder.Name;
        orgWielder.Color = updateWielder.Color;
        orgWielder.Affiliation = updateWielder.Affiliation;
        context.SaveChanges();
        return Ok(orgWielder);
    }

    [Route("{id}")]
    [HttpDelete]
    public IActionResult DeleteWielder(int id)
    {
        var wielder = context.LightSaberWielders.Find(id);
        if (wielder == null)
            return NotFound();
        
        context.LightSaberWielders.Remove(wielder);
        context.SaveChanges();
        return NoContent();
    }
}