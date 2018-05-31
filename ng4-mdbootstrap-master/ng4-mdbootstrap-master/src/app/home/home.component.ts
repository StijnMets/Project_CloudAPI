import { Component, OnInit } from '@angular/core';
import { StarWarsService, IPeople } from '../services/starwars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
    person : IPeople;
    private _url : string;

    constructor(private service: StarWarsService, private route: ActivatedRoute) {}

    ngOnInit(){
        this.route.queryParams.subscribe(params => {
            console.log(params);
            this._url= params['url'];
            console.log(this._url);
        })


        this.service.PeopleSearch(this._url).subscribe(d => this.person = d);
    }

 /*   get Search(){
        return this._search;
    }
    set Search(value: string) {
        console.log(value)
        this._search = value;
        this.service.getPeople(this._search).subscribe(d => this.person = d);
      }*/
}
