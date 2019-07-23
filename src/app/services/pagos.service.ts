import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagosService {
  private apiUrl = 'https://taquilla.rodsoft.com.mx';

  constructor(
    private httpClient: HttpClient
  ) { }

  public payTickets(horarioId, paymentData) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ec34e8fe2fcf881ec3e869363bc3390c0538af6c`
    });
    let options = { headers: headers };

    return this.httpClient.post(`${this.apiUrl}/boletos/horario/${horarioId}/pagar`, paymentData, options);
  }
}
