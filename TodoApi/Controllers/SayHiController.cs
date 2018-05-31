using Microsoft.AspNetCore.Mvc;

public class SayHiController : Controller
{
    [Route("hi")]
    [HttpGet]

    public IActionResult Hello(){
        return Content("Hello world!");
    }
}