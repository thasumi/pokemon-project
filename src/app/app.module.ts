import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationModule } from './modules/navegation/navegation.module';
import { SharedModule } from './shared/shared.module';
import { MainPageModule } from './modules/main-page/main-page.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegationModule,
    SharedModule,
    MainPageModule,
    HttpClientModule,
  ],
  exports: [],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
