import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaquillaComponent } from "../app/taquilla/taquilla.component";

const routes: Routes = [
  {
    path: '',
    component: TaquillaComponent
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
