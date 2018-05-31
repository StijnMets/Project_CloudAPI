using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class Affiliation
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Leadertitle { get; set; }

        public string DateFounded { get; set; }

        [JsonIgnore]
        public ICollection<LightSaberWielder> LightSaberWielders { get; set; }
    }
}