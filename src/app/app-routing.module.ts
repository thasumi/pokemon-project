import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './modules/navegation/header/header.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/main-page/main-page.module').then(m => m.MainPageModule)},
  { path: 'details', loadChildren: () => import('./modules/details-page/details-page.module').then(m => m.DetailsPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
