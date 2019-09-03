import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  private apiUrl = 'https://taquilla.rodsoft.com.mx';

  constructor(
    private httpClient: HttpClient,
    private oauthService: OAuthService
  ) { }

  public getSalaByEmailAndDate(email, date) {
    return this.httpClient.get(`${this.apiUrl}/boletos/${email}/${date}`);
  }
}
