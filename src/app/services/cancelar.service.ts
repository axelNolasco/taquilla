import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CancelarService {
  private apiUrl = environment.apiURL;
  //private apiUrl = 'http://taquilla.localhost';

  constructor(
    private httpClient: HttpClient
  ) { }

  public cancelTicket(boletoAsientoId, delelteAll, user, password, motivo) {
    //make the body params
    let data = {
      'user': user,
      'pass': password,
      'motivo': motivo
    }

    return this.httpClient.post(`${this.apiUrl}/boletos/cancelar/${boletoAsientoId}/${delelteAll}`, data);
  }

  public changueTicket(boletoAsientoId, delelteAll) {
    return this.httpClient.post(`${this.apiUrl}/boletos/cambio/${boletoAsientoId}/${delelteAll}`, []);
  }
}
