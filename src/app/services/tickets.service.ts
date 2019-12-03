import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  private apiUrl = 'https://taquilla.plazasanjavier.com';

  constructor(
    private httpClient: HttpClient,
    private oauthService: OAuthService
  ) { }

  public getByCodigo(codigoBoleto: string) {
    return this.httpClient.get(`${this.apiUrl}/boletos/code/${codigoBoleto}`);
  }

  public getCurrentUserTickets() {
    return this.httpClient.get(`${this.apiUrl}/boletos`);
  }

  public printTickets(ticketsData) {
    console.log(ticketsData);
    return this.httpClient.post(`http://localhost/print/index.php`, ticketsData);
  }
}
