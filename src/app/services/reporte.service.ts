import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  //private apiUrl = 'https://taquilla.plazasanjavier.com';
  private apiUrl = 'http://taquilla.localhost';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getReport(boletoCreado, username) {
    return this.httpClient.get(`${this.apiUrl}/reportes/ventas/dia?boleto_creado=${boletoCreado}&username=${username}`);
  }
}