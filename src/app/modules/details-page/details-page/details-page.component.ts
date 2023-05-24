import { Component, HostListener, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FlavorResponseInterface, IPokemon, IPokemonDetails } from 'src/app/shared/models/pokemonModel';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})

export class DetailsPageComponent {

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.isMobile();
  }
  screenWidth = this.renderer.parentNode(window.innerWidth);

  id: number = 0;
  pokemon: IPokemonDetails | null = null;
  statsHp: number = 0;
  statsAttack: number = 0;
  statsSpeed: number = 0;
  statsDef: number = 0;
  mobile: boolean = false;
  flavorResponse: FlavorResponseInterface[] = [];
  currentLang: string = 'en';
  description: string = '';
  notFoundMessage: boolean = false;

  constructor(
    private pokeService: PokemonService,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) {

  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.isMobile();
    this.id = this.route.snapshot.params['id'];
    this.pokeService.getPokemon(this.id).subscribe(res => {
      this.pokemon = res as any;
      this.getStat();
    });
    this.pokeService.getPokemonDescription(this.id, this.currentLang).subscribe({
      next: (res) => {
        this.flavorResponse = res;
        if (!this.flavorResponse.length) {
          this.notFoundMessage = true;
          return;
        }
        this.description = this.flavorResponse.at(-1)!.flavor_text;
      },
      error: (e) => {
        console.log(e);
        this.notFoundMessage = true;
      }
    })
  }

  isMobile() {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth)
    if (this.screenWidth <= 992) {
      this.mobile = true;
      return
    }
    this.mobile = false;
  }

  getStat() {
    for (let i = 0; i < this.pokemon!.stats.length; i++) {
      switch (this.pokemon?.stats[i].stat.name) {
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

}

