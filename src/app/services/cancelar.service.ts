import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CancelarService {
  private apiUrl = 'https://taquilla.plazasanjavier.com';
  //private apiUrl = 'https://taquilla.localhost';
  
  constructor(
    private httpClient: HttpClient
  ) { }

  public cancelTicket(boletoAsientoId, delelteAll) {
    return this.httpClient.delete(`${this.apiUrl}/boletos/cancelar/${boletoAsientoId}/${delelteAll}`);
  }
}
