import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationModule } from './modules/navegation/navegation.module';
import { SharedModule } from './shared/shared.module';
import { MainPageModule } from './modules/main-page/main-page.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgxSpinnerModule.forRoot({ type: 'ball-clip-rotate-multiple' }),
    BrowserModule,
    AppRoutingModule,
    NavegationModule,
    SharedModule,
    MainPageModule,
    HttpClientModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
