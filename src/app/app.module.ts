import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OAuthModule, DefaultOAuthInterceptor } from 'angular-oauth2-oidc';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from "./shared/angular-material.module";

import { TaquillaComponent } from './taquilla/taquilla.component';
import { ReimpresionComponent } from './reimpresion/reimpresion.component';
import { CancelacionModal } from './reimpresion/reimpresion.component';
import { CambioComponent } from './cambio/cambio.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { LoginComponent } from './login/login.component';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { ReporteComponent } from './reporte/reporte.component';

import { PeliculasService } from "./services/peliculas.service";
import { SalasService } from "./services/salas.service";
import { PagosService } from "./services/pagos.service";
import { TicketsService } from "./services/tickets.service";

import { AuthGuard } from './app.guard';
import { TokenInterceptor } from './token.interceptor';
import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
  declarations: [
    AppComponent,
    TaquillaComponent,
    ReimpresionComponent,
    CambioComponent,
    ReporteComponent,
    ReservacionesComponent,
    LoginComponent,
    CarteleraComponent,
    CancelacionModal,
  ],
  entryComponents: [
    CancelacionModal,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    PeliculasService,
    SalasService,
    PagosService,
    TicketsService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
