import { Component, OnInit } from '@angular/core';
import { StarWarsService, IPeople, ISpecies, IPlanet, IMovie, IVehicle, IStarship } from '../services/starwars.service';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'q';

@Component({
  selector: 'app-peopledetail',
  templateUrl: './peopledetail.component.html',
})
export class PeopledetailComponent implements OnInit{
    person : IPeople;
    species : ISpecies;
    planet : IPlanet;
    films : IMovie[] = [];
    moviedetail : IMovie;
    vehicles : IVehicle[] = [];
    starships : IStarship[] = [];
    private _peopleUrl : string;

    constructor(private service: StarWarsService, private route: ActivatedRoute) {}

    ngOnInit(){
        this.route.queryParams.subscribe(params => {
            console.log(params);
            this._peopleUrl= params['url'];
            console.log(this._peopleUrl);
        })


        this.service.PeopleSearch(this._peopleUrl).subscribe(d => {this.person = d;
        this.Planet(this.person.homeworld);
        this.Species(this.person.species[0]);
        this.Movies(this.person.films);
        this.Vehicles(this.person.vehicles);
        this.Starships(this.person.starships);
        });
    }

    Species(speciesUrl: string){
        this.service.SpeciesSearch(speciesUrl).subscribe(d => this.species = d);
    }

    Planet(planetUrl: string){
        this.service.PlanetSearch(planetUrl).subscribe(d => this.planet = d);
    }

    Movies(movieUrl: string[])
    {
        movieUrl.forEach(element => {
            this.service.MovieSearch(element).subscribe(d => {this.films.push(d);
                console.log(d);});
            
        });
    }

    Vehicles(vehicleUrl: string[])
    {
        vehicleUrl.forEach(element => {
            this.service.VehicleSearch(element).subscribe(d => {this.vehicles.push(d)})
        });
    }

    Starships(starshipUrl: string[])
    {
        starshipUrl.forEach(element => {
            this.service.StarshipSearch(element).subscribe(d => {this.starships.push(d)})
        });
    }

    MovieDetails(film: IMovie)
    {
        this.moviedetail = film;
    }
}