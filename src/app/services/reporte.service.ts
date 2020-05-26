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
    var params = "ReporteSearch%5Bboleto_creado%" + boletoCreado + "&ReporteSearch%5Busername%5D="+username; 
    return this.httpClient.get(`${this.apiUrl}/reportes/ventas/dia?` + params);
  }
}