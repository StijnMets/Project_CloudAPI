import { Component, OnInit } from '@angular/core';
import { StarWarsService, IPeople} from '../services/starwars.service'
import { Router } from '@angular/router';

@Component({
    selector: 'app-peoplelist',
    templateUrl: './peoplelist.component.html'
})

export class PeopleListComponent implements OnInit{
    lijst : IPeople[];
    page = 1;
    format = "json";
    name= "luke";
    

    constructor(private service: StarWarsService, private _router: Router){}

    ngOnInit(){
        this.service.PeopleList(this.page, this.format).subscribe(d => this.lijst = d);
    }

    nextPage() {
        if(this.page < 9)
        {
            this.page ++;
        }
        this.service.PeopleList(this.page, this.format).subscribe(d => this.lijst = d);
    }

    previousPage() { 
        if(this.page > 1)
        {
            this.page --;
        }
        this.service.PeopleList(this.page, this.format).subscribe(d => this.lijst = d);
    }

    PeopleSearch(search : string){
        if(search == "")
        {
            this.service.PeopleList(this.page, this.format).subscribe(d => this.lijst = d);
        }
        else
        {
            this.service.SearchPeople(search).subscribe(d=> this.lijst = d);
        }
    }
}