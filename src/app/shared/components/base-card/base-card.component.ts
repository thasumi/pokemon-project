import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '../../models/pokemonModel';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss']
})


export class BaseCardComponent implements OnInit {

  @Input() pokemon: IPokemon | null = null;

  ngOnInit(): void {
    console.log(this.pokemon);
  }

  pokemonDetails(id:number) {

  }
}
