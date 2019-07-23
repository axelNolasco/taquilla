import { Component, OnInit } from '@angular/core';

import { PeliculasService } from "../services/peliculas.service";

@Component({
  selector: 'app-taquilla',
  templateUrl: './taquilla.component.html',
  styleUrls: ['./taquilla.component.scss']
})
export class TaquillaComponent implements OnInit {
  public complejos: Array<any> = [
    {
      label: 'Plaza San Javier',
      value: 'san_javier'
    }
  ];
  public currentComplejo = this.complejos[0];
  public fechas: any;
  public selectedDate: string;
  
  constructor(
    private peliculasService: PeliculasService
  ) { }

  ngOnInit() {
    this.getPeliculas('');
    this.getFechas();
    console.log(this.currentComplejo);
    
  }

  private getPeliculas(date) {
    this.peliculasService.getPeliculas(date)
    .subscribe(response => {
      console.log(response);

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
    this.getPeliculas(this.selectedDate);
  }
}
