using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

[Route("api/v1/affiliations")]
public class AffiliationController : Controller
{
    private readonly LibraryContext context;

    public AffiliationController(LibraryContext context)
    {
        this.context = context;
    }

    [HttpGet]
    public List<Affiliation> GetAllAffiliations()
    {
        return context.Affiliations.ToList();
    }

    [Route("{id}")]
    [HttpGet]
    public IActionResult GetAffiliation(int id)
    {
        var affiliation = context.Affiliations.Find(id);
        if (affiliation == null)
            return NotFound();

        return Ok(affiliation);
    }

    [Route("{id}/wielders")]
    [HttpGet]
    public IActionResult GetWieldersForAffiliation(int id)
    {
        var affiliation = context.Affiliations
                            .Include(d => d.LightSaberWielders)
                            .SingleOrDefault(d => d.Id == id);

        if (affiliation == null)
            return NotFound();
        
        return Ok(affiliation.LightSaberWielders);
        
    }

    [HttpPost]
    public IActionResult CreateAffiliation([FromBody] Affiliation newAffiliation)
    {
        context.Affiliations.Add(newAffiliation);
        context.SaveChanges();
        return Created("", newAffiliation);
    }

    [HttpPut]
    public IActionResult UpdateAffiliation([FromBody] Affiliation updateAffiliation)
    {
        var orgAffiliation = context.Affiliations.Find(updateAffiliation.Id);
        if (orgAffiliation == null)
            return NotFound();
        
        orgAffiliation.Name = updateAffiliation.Name;
        orgAffiliation.Leadertitle = updateAffiliation.Leadertitle;

        context.SaveChanges();
        return Ok(orgAffiliation);
    }

    [Route("{id}")]
    [HttpDelete]
    public IActionResult DeleteAffiliation(int id)
    {
        var affiliation = context.Affiliations.Find(id);
        if (affiliation == null)
            return NotFound();

        context.Affiliations.Remove(affiliation);
        context.SaveChanges();
        return NoContent();
    }
}