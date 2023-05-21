import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './modules/navegation/header/header.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/main-page/main-page.module').then(m => m.MainPageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
