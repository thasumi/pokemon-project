import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCardComponent } from './components/base-card/base-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';



@NgModule({
  declarations: [
    BaseCardComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaseCardComponent,
    SearchBarComponent
  ]
})
export class SharedModule { }
