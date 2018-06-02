import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LightsaberService, IWielder, IAffiliation } from '../services/lightsaber.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
    selector: 'app-wielderlist',
    templateUrl: './wielderlist.component.html'
})

export class WielderListComponent implements OnInit{
    list : IWielder[];
    affiliations : IAffiliation[];
    affiliationDetail : IAffiliation;
    wielder : IWielder;
    updateWielder : IWielder;
    page = 0;
    sort = "affiliation";

    constructor(private _router: Router, private service: LightsaberService){}

    ngOnInit(){
        this.service.WielderList(this.page, this.sort).subscribe(d => this.list = d);
        this.service.AffiliationList().subscribe(d => this.affiliations = d);
    }

    nextPage() {
        this.page ++;
        this.service.WielderList(this.page, this.sort).subscribe(d => {this.list = d;
        console.log(this.list);
        if (this.list.length == 0){
            this.page --;
            this.service.WielderList(this.page, this.sort).subscribe(d => this.list = d);
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
        this.service.WielderList(this.page, this.sort).subscribe(d => this.list = d);
    }

    Affiliation(affiliation: IAffiliation)
    {
        this.wielder = null;
        this.affiliationDetail = affiliation;
    }

    SetSort(sort: string){
        console.log(sort);
        this.service.WielderList(this.page, sort).subscribe(d => this.list = d);
    }

    GetWielder(id: number)
    {
        this.affiliationDetail = null;
        this.service.GetWielder(id).subscribe(d => this.wielder = d);
    }

    DeleteWielder(id: number)
    {
        this.service.DeleteWielder(id).subscribe();
        this.service.WielderList(this.page, this.sort).subscribe(d => this.list = d);
        this.wielder = null;
    }

    EditWielder(id: number)
    {
        this.wielder = null;
        this.service.GetWielder(id).subscribe(d => {this.updateWielder = d;
            this.updateWielder.name = "Yoda";
            this.updateWielder.color = "green";
            this.service.UpdateWielder(this.updateWielder).subscribe();
            console.log(this.updateWielder);
        });
    }
}