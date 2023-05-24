import { Component } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(private router: Router,
    private translateService: TranslateService) {

  }

  ngOnInit(): void {
    console.log(this.translateService.currentLang)
    

  }

  redirectHome() {
    this.router.navigate(['/']);
  }

  changeLang(lang: string) {
  
    this.translateService.use(lang);
    console.log(this.translateService.currentLang)

  }
}
