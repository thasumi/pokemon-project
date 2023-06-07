import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { IPokemon } from '../../models/pokemonModel';
import { catchError, filter } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  pokemon!: IPokemon;
  notFoundMessage: boolean = false;

  constructor(
    private router: Router,
    private pokeService: PokemonService,
    private translate: TranslateService,

  ) {

  }

  search() {
    let search = (document.getElementById("search") as HTMLInputElement).value
    this.pokeService.getPokemonByName(search.toLowerCase()).subscribe({
      next: (res) => {
        this.pokemon = res;
        this.router.navigateByUrl('/details', { skipLocationChange: true }).then(() => {
          this.router.navigateByUrl('/details/' + this.pokemon.id);
        })
      },
      error: (e) => {
        this.notFoundMessage = true;
      }
    })
  }
}

