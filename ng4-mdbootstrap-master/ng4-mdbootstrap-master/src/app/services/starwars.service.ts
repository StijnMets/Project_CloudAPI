import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class StarWarsService {
    constructor(private _http: HttpClient){}

    PeopleSearch(url: string) : Observable<IPeople>
    {
        return this._http.get<IPeople>(`${url}`)
    }

    SpeciesSearch(url: string) : Observable<ISpecies>
    {
        return this._http.get<ISpecies>(`${url}`)
    }

    PlanetSearch(url: string) : Observable<IPlanet>
    {
        return this._http.get<IPlanet>(`${url}`)
    }

    MovieSearch(url: string) : Observable<IMovie>
    {
        return this._http.get<IMovie>(`${url}`)
    }

    VehicleSearch(url: string) : Observable<IVehicle>
    {
        return this._http.get<IVehicle>(`${url}`)
    }

    StarshipSearch(url: string) : Observable<IStarship>
    {
        return this._http.get<IStarship>(`${url}`)
    }

    PeopleList(page: number, format : string) : Observable<IPeople[]>
    {
        return this._http.get<IPeople[]>(`https://swapi.co/api/people/?page=${page}&format=${format}`)
    }

    PlanetList(page: number) : Observable<IPlanet[]>
    {
        return this._http.get<IPlanet[]>(`https://swapi.co/api/planets/?page=${page}`)
    }

    MovieList() : Observable<IMovie[]>
    {
        return this._http.get<IMovie[]>(`https://swapi.co/api/films/`)
    }

    SearchPeople(name: string): Observable<IPeople[]>
    {
        return this._http.get<IPeople[]>(`https://swapi.co/api/people/?search=${name}`)
    }
}

export interface IPeople {
        name: string;
        height: string;
        mass: string;
        hair_color: string;
        skin_color: string;
        eye_color: string;
        birth_year: string;
        gender: string;
        homeworld: string;
        films: string[];
        species: string[];
        vehicles: string[];
        starships: string[];
        created: Date;
        edited: Date;
        url: string;
}

export interface ISpecies {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld?: any;
    language: string;
    people: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface IPlanet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface IMovie {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface IVehicle {
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: Date;
    crew: string;
    edited: Date;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    pilots: any[];
    films: string[];
    url: string;
    vehicle_class: string;
}

export interface IStarship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}