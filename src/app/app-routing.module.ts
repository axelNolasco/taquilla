import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaquillaComponent } from "../app/taquilla/taquilla.component";
import { ReimpresionComponent } from "../app/reimpresion/reimpresion.component";

const routes: Routes = [
  {
    path: '',
    component: TaquillaComponent
  },
  {
    path: 'reimpresion',
    component: ReimpresionComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
