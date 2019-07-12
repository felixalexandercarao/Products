import { Component, Output, EventEmitter } from '@angular/core';
import {PokemonService} from '../pokemon/pokemon.service';



@Component({
    selector: 'pm-productform',
    templateUrl: './productform.component.html',
    providers:[PokemonService]
})

export class ProductFormComponent {
    pokemon:any;   
    
    @Output() onAddNewProduct: EventEmitter<any> = new EventEmitter();
    productName: string = '';
    productCode: string = '';
    releaseDate: string = '';
    description: string = '';
    price: number = 0;
    starRating: number = 0;
    pokemonUrl: string = '';
    constructor(private _pokemonService: PokemonService){
    
    }
    
    addNewProduct() {
        this._pokemonService.getDoge(this.pokemonUrl).subscribe(x=>{
            this.pokemon=x;
        });
        this.onAddNewProduct.emit({
            productName: this.productName,
            productCode: this.productCode,
            releaseDate: this.releaseDate,
            description: this.description,
            price: this.price,
            starRating: this.starRating,
            imageUrl: this.pokemon.sprites.front_default
        });
        this.productName = '';
        this.productCode = '';
        this.releaseDate= '';
        this.description = '';
        this.price= 0;
        this.starRating = 0;
        this.pokemonUrl = '';
        this.pokemon='';
}

    
    
}