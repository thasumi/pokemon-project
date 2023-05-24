import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon-project';
  spinner: boolean = false;

  constructor(private translate: TranslateService,
    private spinnerService: SpinnerService) {

    translate.setDefaultLang('pt-br');
    translate.use('pt-br');
    this.spinner = this.spinnerService.isVisible();
  }
}
