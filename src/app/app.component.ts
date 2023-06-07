import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon-project';
  lang: string = 'en';

  constructor(private translate: TranslateService,
  private spinner: NgxSpinnerService) {

    translate.setDefaultLang(this.lang);
    translate.use(this.lang);
  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  
}
