import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCardComponent } from './components/base-card/base-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TranslateModule } from '@ngx-translate/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';




@NgModule({
  declarations: [
    BaseCardComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    BaseCardComponent,
    SearchBarComponent,
    TranslateModule,
    InfiniteScrollModule  ]
})
export class SharedModule { }
