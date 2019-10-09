import { Component, OnInit } from '@angular/core';

import { PeliculasService } from "../services/peliculas.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.scss']
})

export class CarteleraComponent implements OnInit {
  public complejos: Array<any> = [
    {
      label: 'Plaza San Javier',
      value: 'san_javier'
    }
  ];

  public currentComplejo = this.complejos[0];
  public fechas: any;
  public selectedDate: string;
  public peliculas: any;
  public selectedHorario: any;
  
  constructor(
    private peliculasService: PeliculasService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getPeliculas('');
    this.getFechas();
  }

  private getPeliculas(date) {
    this.peliculas = [];
    this.peliculasService.getPeliculas(date)
    .subscribe(response => {
      console.log(response);
      this.peliculas = response;
    }, error => {
      console.log(error);
    });
  }

  private getFechas() {
    this.peliculasService.getFechas()
    .subscribe(response => {
      console.log(response);
      this.fechas = response;
      this.selectedDate = this.fechas[0];
    }, error => {
      console.log(error);
    });
  }

  public handleDateChange() {
    console.log(this.selectedDate);
    this.resetDataToDefaultValues();
    this.getPeliculas(this.selectedDate);
  }

  private resetDataToDefaultValues() {
    this.selectedHorario = null;
  }

  public handleHorarioSelection(horario, pelicula) {
    console.log(horario);
    this.resetDataToDefaultValues();
    this.selectedHorario = horario;
  }
}
