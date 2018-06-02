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
                //affiliations
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
                context.Affiliations.Add(jediOrder);

                //wielders
                //jedi
                var wielder = new LightSaberWielder()
                {
                    Name = "Anakin Skywalker",
                    Color = "blue",
                    Affiliation = jediOrder
                };
                context.LightSaberWielders.Add(wielder);
                wielder = new LightSaberWielder()
                {
                    Name = "Darth Bane",
                    Color = "purple",
                    Affiliation = sithOrder
                };
                context.LightSaberWielders.Add(wielder);
                wielder = new LightSaberWielder()
                {
                    Name = "Yoda",
                    Color = "green",
                    Affiliation = jediOrder
                };
                context.LightSaberWielders.Add(wielder);
                wielder = new LightSaberWielder()
                {
                    Name = "Qui-Gon Jinn",
                    Color = "green",
                    Affiliation = jediOrder
                };
                context.LightSaberWielders.Add(wielder);
                wielder = new LightSaberWielder()
                {
                    Name = "Darth Maul",
                    Color = "red",
                    Affiliation = sithOrder
                };
                wielder = new LightSaberWielder()
                {
                    Name = "Obi-Wan Kenobi",
                    Color = "blue",
                    Affiliation = jediOrder
                };
                context.LightSaberWielders.Add(wielder);
                wielder = new LightSaberWielder()
                {
                    Name = "Anakin Skywalker (Sidious apprentice)",
                    Color = "blue",
                    Affiliation = sithOrder
                };
                context.LightSaberWielders.Add(wielder);
                wielder = new LightSaberWielder()
                {
                    Name = "Barriss Offee",
                    Color = "blue",
                    Affiliation = jediOrder
                };
                context.LightSaberWielders.Add(wielder);
                wielder = new LightSaberWielder()
                {
                    Name = "Lowbacca",
                    Color = "bronze",
                    Affiliation = jediOrder
                };
                context.LightSaberWielders.Add(wielder);
                wielder = new LightSaberWielder()
                {
                    Name = "Mace Windu",
                    Color = "purple",
                    Affiliation = jediOrder
                };
                context.LightSaberWielders.Add(wielder);
                wielder = new LightSaberWielder()
                {
                    Name = "Darth vader",
                    Color = "red",
                    Affiliation = sithOrder
                };
                context.LightSaberWielders.Add(wielder);
                wielder = new LightSaberWielder()
                {
                    Name = "Darth Sidious",
                    Color = "red",
                    Affiliation = sithOrder
                };
                context.LightSaberWielders.Add(wielder);
                wielder = new LightSaberWielder()
                {
                    Name = "Ahsoka Tano",
                    Color = "green, yellow, white",
                    Affiliation = jediOrder
                };
                context.LightSaberWielders.Add(wielder);
                wielder = new LightSaberWielder()
                {
                    Name = "Luke Skywalker",
                    Color = "green",
                    Affiliation = jediOrder
                };
                context.LightSaberWielders.Add(wielder);
                wielder = new LightSaberWielder()
                {
                    Name = "Darth Bane",
                    Color = "red",
                    Affiliation = sithOrder
                };
                context.LightSaberWielders.Add(wielder);
                wielder = new LightSaberWielder()
                {
                    Name = "Darth Tyranus",
                    Color = "red",
                    Affiliation = sithOrder
                };
                context.LightSaberWielders.Add(wielder);
                wielder = new LightSaberWielder()
                {
                    Name = "Darth Zannah",
                    Color = "red",
                    Affiliation = sithOrder
                };
                context.LightSaberWielders.Add(wielder);

                context.LightSaberWielders.Add(wielder);
                context.SaveChanges();
            }
        }
    }
}