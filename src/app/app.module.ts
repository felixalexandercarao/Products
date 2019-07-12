import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule }    from '@angular/http'
import{PokemonService} from'./pokemon/pokemon.service'
import { AppComponent } from './app.component';
import{ProductComponent} from './product/product.component'
import { PokemonComponent } from './pokemon/pokemon.component';
import { ProductFormComponent } from './productform/productform.component';

@NgModule({
  declarations: [AppComponent,ProductComponent,PokemonComponent,ProductFormComponent],
  imports: [BrowserModule,FormsModule,HttpModule,HttpClientModule],
  bootstrap: [AppComponent],
  providers:[PokemonService]
})
export class AppModule { }

