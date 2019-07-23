import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from "./shared/angular-material.module";
import { TaquillaComponent } from './taquilla/taquilla.component';

import { PeliculasService } from "./services/peliculas.service";
import { ReimpresionComponent } from './reimpresion/reimpresion.component';

@NgModule({
  declarations: [
    AppComponent,
    TaquillaComponent,
    ReimpresionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
