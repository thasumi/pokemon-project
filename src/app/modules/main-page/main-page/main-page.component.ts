import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { forkJoin, Observable, map } from 'rxjs';
import { IPokemon } from 'src/app/shared/models/pokemonModel';
import { TranslateService } from '@ngx-translate/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {



    //listener for the resize screen
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.checkScrollEnabled();
  }
    //get current screen Width
  screenWidth = this.renderer.parentNode(window.innerWidth);

  isScrollEnabled = false;
  pokemonList$: Observable<IPokemon[]>[] = [];
  lowerIntervalWeb: number = 1;
  lowerIntervalMobile: number = 1;
  lastIntervalMobile: number = 6;
  pokemonList: IPokemon[] = [];

  constructor(
    private pokeService: PokemonService,
    private translate: TranslateService,
    private renderer: Renderer2,
    private spinner: SpinnerService) {
  }


  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.checkScrollEnabled();
  }


  checkScrollEnabled() {
    const minWidth = 992;
    this.isScrollEnabled = this.screenWidth <= minWidth;
    if (!this.isScrollEnabled) {
      this.pokemonList$ = [];
      this.createPokemonListWeb();
      this.lowerIntervalWeb = 1;
      this.lowerIntervalMobile = 1;
      this.lastIntervalMobile = 6;
    }
    if (this.isScrollEnabled) {
      this.pokemonList$ = [];
      this.createPokemonListMobile();
    }
  }

  getNextPokemonWeb() {
    this.lowerIntervalWeb += 10;
    this.createPokemonListWeb();
  }

  getPreviousPokemonWeb() {
    if (this.lowerIntervalWeb === 1) {
      return;
    }
    this.lowerIntervalWeb -= 10;
    this.createPokemonListWeb();
  }

  createPokemonListWeb() {
    this.spinner.showSpinner();
    this.pokemonList$ = [];
    for (let i = this.lowerIntervalWeb; i < this.lowerIntervalWeb + 10; i++) {
      this.pokemonList$.push(this.pokeService.getPokemon(i));
    }
    forkJoin(this.pokemonList$).pipe(
      map(response => response.reduce((all, item) => all.concat(item), []))
    ).subscribe(result => {
      this.pokemonList = result;
      this.spinner.hideSpinner();
    })
  }

  createPokemonListMobile() {
    this.spinner.showSpinner();
    for (let i = this.lowerIntervalMobile; i < this.lastIntervalMobile; i++) {
      this.pokemonList$.push(this.pokeService.getPokemon(i));
    }
    forkJoin(this.pokemonList$).pipe(
      map(response => response.reduce((all, item) => all.concat(item), []))
    ).subscribe(result => {
      this.pokemonList = result;
      this.spinner.hideSpinner();
    })
  }

  onScroll() {
    if (this.isScrollEnabled) {
      this.lowerIntervalMobile = this.lowerIntervalMobile += 5;
      this.lastIntervalMobile = this.lastIntervalMobile += 5;
      this.createPokemonListMobile();
    }
  }
}
