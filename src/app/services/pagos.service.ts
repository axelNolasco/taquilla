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
    return this.httpClient.post(`${this.apiUrl}/boletos/horario/${horarioId}/pagar`, paymentData);
  }
}
