import {Component} from '@angular/core';
import {PokemonService} from './pokemon.service';
@Component({
  selector: 'pm-pokemon',
  templateUrl:'./pokemon.component.html',
  providers:[PokemonService]
})

export class PokemonComponent{
    pokemon:any;
    constructor(private _pokemonService: PokemonService){
    
    }
    searchString:string="";
    getDoge(){
        this._pokemonService.getDoge(this.searchString).subscribe(x=>{
            console.log(x);           
            this.pokemon=x;
            console.log(this.pokemon.name);
        });

    }
}