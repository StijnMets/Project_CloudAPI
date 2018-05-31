import { Component, OnInit } from '@angular/core';
import { StarWarsService, IPeople, IMovie, IPlanet, IStarship, IVehicle } from '../services/starwars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
})
export class MovieListComponent implements OnInit{
    lijst : IMovie[];
    movieDetail : IMovie;
    peopleList : IPeople[] = [];
    planetlist : IPlanet[] = [];
    starships : IStarship[] = [];
    vehicles : IVehicle[] = [];
    private _movieUrl : string;

    constructor(private service: StarWarsService, private route: ActivatedRoute){}

    ngOnInit(){
        this.movieDetail = null;
        this.route.queryParams.subscribe(params => {
            if(!(params == null)){
                console.log(params);
                this._movieUrl= params['url'];
                this.service.MovieSearch(this._movieUrl).subscribe(d => this.MovieDetail(d));
            }
        })

        this.service.MovieList().subscribe(d => this.lijst = d);
    }

    MovieDetail(movie: IMovie){
        this.movieDetail = movie;
        this.People(movie.characters);
        this.Planets(movie.planets);
        this.Starships(movie.starships);
        this.Vehicles(movie.vehicles);
    }

    People(peopleUrl: string[]){
        this.peopleList = [];
        peopleUrl.forEach(element => {
            this.service.PeopleSearch(element).subscribe(d => this.peopleList.push(d));
        });
    }

    Planets(planetUrl: string[]){
        this.planetlist = [];
        planetUrl.forEach(element => {
            this.service.PlanetSearch(element).subscribe(d => this.planetlist.push(d));
        });
    }

    Starships(starshipUrl: string[])
    {
        this.starships = [];
        starshipUrl.forEach(element => {
            this.service.StarshipSearch(element).subscribe(d => {this.starships.push(d)})
        });
    }

    Vehicles(vehicleUrl: string[])
    {
        this.vehicles = [];
        vehicleUrl.forEach(element => {
            this.service.VehicleSearch(element).subscribe(d => {this.vehicles.push(d)})
        });
    }
    
}
