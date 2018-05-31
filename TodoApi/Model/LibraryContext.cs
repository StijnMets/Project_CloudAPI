
using Microsoft.EntityFrameworkCore;

namespace Model{
    public class LibraryContext : DbContext
    {
        public LibraryContext (DbContextOptions<LibraryContext> options): base(options)
        {
        }
        public DbSet<Affiliation> Affiliations { get; set; }
        public DbSet<LightSaberWielder> LightSaberWielders { get; set; }
    }
}

