import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class LightsaberService {
    constructor(private _http: HttpClient){}

    WielderList(page: number): Observable<IWielder[]>
    {
        return this._http.get<IWielder[]>(`localhost:5000/api/v1/wielders?page=${page}`)
    }

}

export interface IAffiliation {
    id: number;
    name: string;
    leadertitle: string;
    dateFounded: string;
}

export interface IWielder {
    id: number;
    name: string;
    color: string;
    affiliation: IAffiliation;
}