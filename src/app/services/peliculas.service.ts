import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeliculasService {
  private apiUrl = 'https://mobile.plazasanjavier.com';
  //private apiUrl = 'http://mobile.localhost';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPeliculas(date: string) {
    if (!date) {
      date = '';
    } else {
      date = '/' + date;
    }
    return this.httpClient.get(`${this.apiUrl}/cartelera${date}`);
  }

  public getFechas() {
    return this.httpClient.get(`${this.apiUrl}/fechas`)
  }
}
