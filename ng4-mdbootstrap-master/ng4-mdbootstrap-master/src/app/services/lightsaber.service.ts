import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class LightsaberService {
    constructor(private _http: HttpClient){}

    WielderList(page: number, sort: string): Observable<IWielder[]>
    {
        return this._http.get<IWielder[]>(`http://localhost:5000/api/v1/wielders?sort=${sort}&page=${page}`)
    }

    GetWielder(id: number)
    {
        return this._http.get<IWielder>(`http://localhost:5000/api/v1/wielders/${id}`)
    }

    DeleteWielder(id: number)
    {
        return this._http.delete<IWielder>(`http://localhost:5000/api/v1/wielders/${id}`)
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