import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { forkJoin, Observable, map } from 'rxjs';
import { IPokemon } from 'src/app/shared/models/pokemonModel';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  screenWidth = this.renderer.parentNode(window.innerWidth);
  isScrollEnabled = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.checkScrollEnabled();
  }
  resourceList$: Observable<IPokemon[]>[] = [];
  lowerIntervalWeb: number = 1;
  lowerIntervalMobile: number = 1;
  lastIntervalMobile: number = 6;
  showSpinner: boolean = false;
  pokemonList: IPokemon[] = [];

  constructor(
    private pokeService: PokemonService,
    private translate: TranslateService,
    private renderer: Renderer2) {
  }


  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.checkScrollEnabled();
  }


  checkScrollEnabled() {
    const minWidth = 992;
    this.isScrollEnabled = this.screenWidth <= minWidth;
    if (!this.isScrollEnabled) {
      this.resourceList$ = [];
      this.createResourceListWeb();
      this.lowerIntervalWeb = 1;
      this.lowerIntervalMobile = 1;
      this.lastIntervalMobile = 6;
    }
    if (this.isScrollEnabled) {
      this.resourceList$ = [];
      this.createResourceListMobile();
    }
  }

  getNextPokemonWeb() {
    this.lowerIntervalWeb += 10;
    this.createResourceListWeb();
  }

  getPreviousPokemonWeb() {
    if (this.lowerIntervalWeb === 1) {
      return;
    }
    this.lowerIntervalWeb -= 10;
    this.createResourceListWeb();
  }

  createResourceListWeb() {
    this.resourceList$ = [];
    this.showSpinner = true;
    for (let i = this.lowerIntervalWeb; i < this.lowerIntervalWeb + 10; i++) {
      this.resourceList$.push(this.pokeService.getPokemon(i));
    }
    forkJoin(this.resourceList$).pipe(
      map(response => response.reduce((all, item) => all.concat(item), []))
    ).subscribe(result => {
      this.pokemonList = result;
      this.showSpinner = false;
    })
  }

  createResourceListMobile() {
    this.showSpinner = true;
    for (let i = this.lowerIntervalMobile; i < this.lastIntervalMobile; i++) {
      this.resourceList$.push(this.pokeService.getPokemon(i));
    }
    forkJoin(this.resourceList$).pipe(
      map(response => response.reduce((all, item) => all.concat(item), []))
    ).subscribe(result => {
      this.pokemonList = result;
      this.showSpinner = false;
    })
  }

  onScroll() {
    if (this.isScrollEnabled) {
      this.lowerIntervalMobile = this.lowerIntervalMobile += 5;
      this.lastIntervalMobile = this.lastIntervalMobile += 5;
      this.createResourceListMobile();
    }
  }
}
