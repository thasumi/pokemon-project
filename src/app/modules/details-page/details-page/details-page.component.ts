import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { IPokemon, IPokemonDetails } from 'src/app/shared/models/pokemonModel';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})

export class DetailsPageComponent {
  id: number = 0;
  pokemon: IPokemonDetails | null = null;

  constructor(
    private pokeService: PokemonService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.pokeService.getAll();
    this.pokeService.getPokemon(this.id).subscribe(res => {
      this.pokemon = res as any;
    })

  }
  //FAZER FUNÇÃO PARA PEGAR STATUS
  //ARRUMAR GRÁFICO 
  //VER TRADUÇÃO
  // ARRUMAR BOTÕES DO SLIDER
  
}

