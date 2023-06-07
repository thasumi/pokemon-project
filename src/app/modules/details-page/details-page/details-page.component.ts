import { Component, HostListener, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FlavorResponseInterface, IPokemon, IPokemonDetails } from 'src/app/shared/models/pokemonModel';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})

export class DetailsPageComponent {

  //listener for the resize screen
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.isMobile();
  }

  //get current screen Width
  screenWidth = this.renderer.parentNode(window.innerWidth);

  id: number = 0;
  pokemon: IPokemonDetails | null = null;
  statsHp: number = 0;
  statsAttack: number = 0;
  statsSpeed: number = 0;
  statsDef: number = 0;
  mobile: boolean = false;
  flavorResponse: FlavorResponseInterface[] = [];
  currentLang: string = '';
  description: string = '';
  notFoundMessage: boolean = false;

  constructor(
    private pokeService: PokemonService,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private translate: TranslateService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.currentLang = this.translate.currentLang;
    this.translate.use(this.currentLang);
  }

  ngOnInit(): void {
    this.spinner.show();
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
        this.notFoundMessage = true;
      }
    })
  }


  isMobile() {
    this.screenWidth = window.innerWidth;
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
    this.spinner.hide();
  }

  getNextPokemonWeb(next: number) {
    this.spinner.show();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('/details/' + next);
      this.spinner.hide();
    });
  }

  getPreviousPokemonWeb(previous: number) {
    this.spinner.show();
    if (previous > 0) {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigateByUrl('/details/' + previous);
        this.spinner.hide();
      });
    }
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('/details/' + 1);
      this.spinner.hide();
    });
  }


}

