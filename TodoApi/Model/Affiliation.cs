using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class Affiliation
    {
        public string Name { get; set; }

        public ICollection<LightSaberWielder> LightSaberWielders { get; set; }

        public string Leadertitle { get; set; }

        public string DateFounded { get; set; }
    }
}