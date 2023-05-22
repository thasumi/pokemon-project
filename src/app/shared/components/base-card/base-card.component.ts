import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '../../models/pokemonModel';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss']
})


export class BaseCardComponent implements OnInit {

  @Input() pokemon: IPokemon | null = null;
  constructor(private router: Router,
    private pokeService: PokemonService) {

  }

  ngOnInit(): void {
    console.log(this.pokemon);
  }

  pokemonDetails(id: number) {
    this.pokeService.setSelectedPokemon(this.pokemon!)
    this.router.navigate(['/details', id]);
  }
}
