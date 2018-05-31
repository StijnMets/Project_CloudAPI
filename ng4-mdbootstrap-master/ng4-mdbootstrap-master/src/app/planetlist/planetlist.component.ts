import { Component, OnInit } from '@angular/core';
import { StarWarsService, IPlanet, IPeople, IMovie} from '../services/starwars.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-planetlist',
    templateUrl: './planetlist.component.html'
})

export class PlanetListComponent implements OnInit{
    lijst : IPlanet[];
    planetDetail : IPlanet;
    peopleList : IPeople[] = [];
    movieList : IMovie[] = [];
    private _planetUrl: string;
    page = 1;    

    constructor(private service: StarWarsService, private route: ActivatedRoute){}

    ngOnInit(){
        this.route.queryParams.subscribe(params => {
            if(!(params == null)){
                console.log(params);
                this._planetUrl= params['url'];
                this.service.PlanetSearch(this._planetUrl).subscribe(d => this.PlanetDetail(d));
            }
        })

        this.service.PlanetList(this.page).subscribe(d => this.lijst = d);
    }

    nextPage() {
        if(this.page < 7)
        {
            this.page ++;
        }
        
        this.service.PlanetList(this.page).subscribe(d => this.lijst = d);
    }

    previousPage() {
        if(this.page > 1)
        {
            this.page --;
        }
        this.service.PlanetList(this.page).subscribe(d => this.lijst = d);
    }

    PlanetDetail(planet : IPlanet){
        console.log(planet);
        this.planetDetail = planet;
        this.People(planet.residents);
        this.Movies(planet.films);
    }

    People(peopleUrl: string[]){
        this.peopleList = [];
        peopleUrl.forEach(element => {
            this.service.PeopleSearch(element).subscribe(d => this.peopleList.push(d));
        });
    }

    Movies(movieUrl: string[]){
        this.movieList = [];
        movieUrl.forEach(element => {
            this.service.MovieSearch(element).subscribe(d => this.movieList.push(d));
        });
    }
}