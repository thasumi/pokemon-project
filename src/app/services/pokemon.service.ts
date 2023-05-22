import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IPokemon } from '../shared/models/pokemonModel';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemon$ = new BehaviorSubject<IPokemon | null>(null);

  constructor(private http: HttpClient) { }

  getPokemon(id: number) {
    return this.http.get<IPokemon[]>(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }

  getPokemonByName(name: string) {
    return this.http.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  }


  setSelectedPokemon(pokemon: IPokemon) {
    this.pokemon$.next(pokemon);
  }

  getSelectedPokemon() {
    return this.pokemon$.value;
  }

  getlag() {
   this.http.get('https://pokeapi.co/api/v2/pokemon-species/5').pipe(map((pokemon: any) => pokemon.flavor_text_entries
   .filter((entry:any) => entry.language.name === 'pt-BR'))).subscribe(res => {
    console.log(res)
   })

   this.http.get('https://pokeapi.co/api/v2/language/9').subscribe(res => {
    console.log(res);
   })
 
  }
}
