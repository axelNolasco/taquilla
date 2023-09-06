import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class PeliculasService {
  private apiUrl = environment.privateAPIURL;
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
