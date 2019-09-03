import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaquillaComponent } from "../app/taquilla/taquilla.component";
import { ReimpresionComponent } from "../app/reimpresion/reimpresion.component";
import { LoginComponent } from "../app/login/login.component";
import { AuthGuard } from './app.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: TaquillaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reimpresion',
    component: ReimpresionComponent,
    canActivate: [AuthGuard]
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