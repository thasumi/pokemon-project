import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  constructor() {

  }

  search() {
    let pokemon = (document.getElementById("search") as HTMLInputElement).value
    console.log(pokemon)
  }

}