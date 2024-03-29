import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaquillaComponent } from "../app/taquilla/taquilla.component";
import { ReimpresionComponent } from "../app/reimpresion/reimpresion.component";
import { CambioComponent } from "../app/cambio/cambio.component";
import { ReporteComponent } from "../app/reporte/reporte.component";
import { ReservacionesComponent } from "../app/reservaciones/reservaciones.component";
import { LoginComponent } from "../app/login/login.component";
import { CarteleraComponent } from "../app/cartelera/cartelera.component";
import { AuthGuard } from './app.guard';

const routes: Routes = [
  {
    path: '',
    component: CarteleraComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'taquilla',
    component: TaquillaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reimpresion',
    component: ReimpresionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cambio',
    component: CambioComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'reporte',
    component: ReporteComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'reservaciones',
    component: ReservacionesComponent,
    //canActivate: [AuthGuard]
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