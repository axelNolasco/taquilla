import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalasService {
  private apiUrl = 'https://api.rodsoft.com.mx';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getSalaById(salaId) {
    return this.httpClient.get(`${this.apiUrl}/horario/${salaId}/sala`)
  }
}
