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
  statsHp: number = 0;
  statsAttack: number = 0;
  statsSpeed: number = 0;
  statsDef: number = 0;

  constructor(
    private pokeService: PokemonService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.pokeService.getPokemon(this.id).subscribe(res => {
      this.pokemon = res as any;
      this.getStat();
    })

  }

getStat() {
  for(let i=0; i < this.pokemon!.stats.length; i++) {
    switch(this.pokemon?.stats[i].stat.name){
      case "hp":
        this.statsHp = this.pokemon.stats[i].base_stat;
        break;
      case "attack":
        this.statsAttack = this.pokemon.stats[i].base_stat;
        break;
      case "defense":
        this.statsDef = this.pokemon.stats[i].base_stat;
        break;
      case "speed":
        this.statsSpeed = this.pokemon.stats[i].base_stat;
        break;
    }
  }

}
  //ARRUMAR GRÁFICO 
  //VER TRADUÇÃO
  // ARRUMAR BOTÕES DO SLIDER
  
}

