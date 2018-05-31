using System.Linq;

namespace Model
{
    public class DBInitializer
    {
        public static void Initialize(LibraryContext context)
        {
            context.Database.EnsureCreated();

            if (!context.LightSaberWielders.Any())
            {
                
                var jediOrder = new Affiliation()
                {
                    Name = "Jedi Order",
                    Leadertitle = "Grand Master",
                    DateFounded = "c. 25783 BBY"
                };
                context.Affiliations.Add(jediOrder);
                var sithOrder = new Affiliation()
                {
                    Name = "Order of the Sith Lords",
                    Leadertitle = "Dark Lord of the Sith",
                    DateFounded = "1000 BBY"
                };
                var wielder = new LightSaberWielder()
                {
                    Name = "Anakin Skywalker",
                    Color = "blue",
                    Affiliation = jediOrder
                };
                context.LightSaberWielders.Add(wielder);
                wielder = new LightSaberWielder()
                {
                    Name = "Darth Vader",
                    Color = "red",
                    Affiliation = sithOrder
                };
                context.LightSaberWielders.Add(wielder);
                context.SaveChanges();
            }
        }
    }
}