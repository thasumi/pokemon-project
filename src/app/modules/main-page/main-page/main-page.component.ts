import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { forkJoin, Observable, map} from 'rxjs';
import { IPokemon } from 'src/app/shared/models/pokemonModel';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  resourceList$: Observable<IPokemon[]>[] = [];
  lowerInterval: number = 1;
  showSpinner: boolean = false;
  pokemonList: IPokemon[] = [];
  constructor(private pokeService: PokemonService) {
    this.pokeService.getlag();
  }

  ngOnInit(): void {
    this.createResourceList();
  }

  getNextPokemon() {
    this.lowerInterval += 10;
    this.createResourceList();
  }

  getPreviousPokemon() {
    if (this.lowerInterval === 1) {
      return;
    }
    this.lowerInterval -= 10;
    this.createResourceList();
  }

  createResourceList() {
    this.resourceList$ = [];
    this.showSpinner = true;
    for (let i = this.lowerInterval; i < this.lowerInterval + 10; i++) {
      this.resourceList$.push(this.pokeService.getPokemon(i));
    }
    forkJoin(this.resourceList$).pipe(
      map(response => response.reduce((all, item) => all.concat(item), []))
    ).subscribe(result => {
      this.pokemonList = result;
      this.showSpinner = false;
    })
  }
}
