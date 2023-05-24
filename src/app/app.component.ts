import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemons-project';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('pt-br');
    translate.use('pt-br');

  }
}
