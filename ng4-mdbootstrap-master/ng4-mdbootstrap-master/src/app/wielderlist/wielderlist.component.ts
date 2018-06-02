import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LightsaberService, IWielder, IAffiliation, INewWielder } from '../services/lightsaber.service';
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
    wieldercreation : boolean = false;
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
        this.updateWielder = null;
        this.wieldercreation = false;

        this.affiliationDetail = affiliation;
    }

    SetSort(sort: string){
        console.log(sort);
        this.service.WielderList(this.page, sort).subscribe(d => this.list = d);
    }

    GetWielder(id: number)
    {
        this.affiliationDetail = null;
        this.updateWielder = null;
        this.wieldercreation = false;

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
        this.affiliationDetail = null;
        this.wielder = null;
        this.updateWielder = null;
        this.wieldercreation = false;


        this.service.GetWielder(id).subscribe(d => {this.updateWielder = d;
        console.log(this.updateWielder);});
        
    }

    ApplyWielder(id: number, name: string, color: string, affiliationid: number)
    {
        this.affiliationDetail = null;
        this.wielder = null;
        this.wieldercreation = null;
        this.wieldercreation =false;


        this.service.GetWielder(id).subscribe(d => {this.updateWielder = d;
            this.updateWielder.name = name;
            this.updateWielder.color = color;
            this.service.GetAffiliation(affiliationid).subscribe(d => {this.updateWielder.affiliation = d;
                this.service.UpdateWielder(this.updateWielder).subscribe();});
            console.log(this.updateWielder);
 
        });
    }

    CreateWielder(){
        this.wielder = null;
        this.updateWielder = null;
        this.affiliationDetail = null;
        this.wieldercreation = true;
    }

    NewWielder(name: string, color: string, affiliationid: number)
    {
        this.service.GetAffiliation(affiliationid).subscribe(d => {var newWielder: INewWielder = {name: name, color: color, affiliation: d};;
            this.service.CreateWielder(newWielder).subscribe();
        });
        this.wieldercreation = false;
    }
}