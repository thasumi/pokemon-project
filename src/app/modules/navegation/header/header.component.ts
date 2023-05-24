import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router,
    private translateService: TranslateService,
    private location: Location
  ) {

  }

  ngOnInit(): void {
  }

  redirectHome() {
    this.router.navigate(['/']);
  }

  changeLang(lang: string) {
    if (lang === this.translateService.currentLang) {
      this.translateService.use(lang);
      return;
    }
    const currentUrl = this.location.path();
    this.translateService.use(lang);

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(currentUrl);
    });
  }
}
