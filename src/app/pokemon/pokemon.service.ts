import{HttpClient} from '@angular/common/http';
import{ Observable} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class PokemonService{
    // private Url="https://cors-anywhere-khen.herokuapp.com/http://shibe.online/api/shibes?count=20";
    private Url="https://pokeapi.co/api/v2/pokemon/";
    constructor(private http:HttpClient){}
    getDoge(i):Observable<any>{
        return this.http.get<any>(this.Url+i+'/');
    }

}

