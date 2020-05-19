import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalasService {
  //private apiUrl = ' https://mobile.plazasanjavier.com';
  private apiUrl = 'http://mobile.localhost';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getSalaById(salaId) {
    return this.httpClient.get(`${this.apiUrl}/horario/${salaId}/sala`)
  }
}
