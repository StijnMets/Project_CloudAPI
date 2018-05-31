import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LightsaberService, IWielder, IAffiliation } from '../services/lightsaber.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
    selector: 'app-wielderlist',
    templateUrl: './wielderlist.component.html'
})

export class WielderListComponent implements OnInit{
    lijst : IWielder[];
    affiliationDetail : IAffiliation;
    wielder : IWielder;
    page = 0;
    sort = "affiliation";

    constructor(private _router: Router, private service: LightsaberService){}

    ngOnInit(){
        this.service.WielderList(this.page, this.sort).subscribe(d => this.lijst = d);
    }

    nextPage() {
        this.page ++;
        this.service.WielderList(this.page, this.sort).subscribe(d => {this.lijst = d;
        console.log(this.lijst);
        if (this.lijst.length == 0){
            this.page --;
            this.service.WielderList(this.page, this.sort).subscribe(d => this.lijst = d);
        }
            
        console.log(this.page);
        });
        this.affiliationDetail = null;
    }

    previousPage() { 
        if(this.page > 0)
        {
            this.page --;
        }
        this.service.WielderList(this.page, this.sort).subscribe(d => this.lijst = d);
    }

    Affiliation(affiliation: IAffiliation)
    {
        this.wielder = null;
        this.affiliationDetail = affiliation;
    }

    SetSort(sort: string){
        console.log(sort);
        this.service.WielderList(this.page, sort).subscribe(d => this.lijst = d);
    }

    GetWielder(id: number)
    {
        this.affiliationDetail = null;
        this.service.GetWielder(id).subscribe(d => this.wielder = d);
    }

    DeleteWielder(id: number)
    {
        this.service.DeleteWielder(id).subscribe();
        this.service.WielderList(this.page, this.sort).subscribe(d => this.lijst = d);
        this.wielder = null;
    }
}