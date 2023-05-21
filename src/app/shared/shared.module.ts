import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCardComponent } from './components/base-card/base-card.component';



@NgModule({
  declarations: [
    BaseCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaseCardComponent
  ]
})
export class SharedModule { }
