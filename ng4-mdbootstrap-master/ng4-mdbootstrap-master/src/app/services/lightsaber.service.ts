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

    GetWielder(id: number): Observable<IWielder>
    {
        return this._http.get<IWielder>(`http://localhost:5000/api/v1/wielders/${id}`)
    }

    DeleteWielder(id: number)
    {
        return this._http.delete<IWielder>(`http://localhost:5000/api/v1/wielders/${id}`)
    }

    UpdateWielder(wielder: IWielder)
    {
        return this._http.put<IWielder>(`http://localhost:5000/api/v1/wielders`, wielder)
    }

    CreateWielder(wielder: INewWielder)
    {
        return this._http.post<INewWielder>(`http://localhost:5000/api/v1/wielders`, wielder)
    }

    AffiliationList() : Observable<IAffiliation[]>
    {
        return this._http.get<IAffiliation[]>(`http://localhost:5000/api/v1/affiliations`)
    }

    GetAffiliation(id: number) : Observable<IAffiliation>
    {
        return this._http.get<IAffiliation>(`http://localhost:5000/api/v1/affiliations/${id}`)
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

export interface INewWielder {
    name: string;
    color: string;
    affiliation: IAffiliation;
}