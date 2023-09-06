import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalasService {
  private apiUrl = environment.privateAPIURL;
  //private apiUrl = 'http://mobile.localhost';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getSalaById(salaId) {
    return this.httpClient.get(`${this.apiUrl}/horario/${salaId}/sala`)
  }
}
