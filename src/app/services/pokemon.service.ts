import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IPokemon } from '../shared/models/pokemonModel';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(id: number) {
    return this.http.get<IPokemon[]>(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }
}
