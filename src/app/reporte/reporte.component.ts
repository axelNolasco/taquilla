import { Component, OnInit } from '@angular/core';
import { ReporteService } from "../services/reporte.service";
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { isNgTemplate } from '@angular/compiler';

@Component({
    selector: 'app-reporte',
    templateUrl: './reporte.component.html',
    styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {
    private reportData: any[];
    private currentDate: string;
    

    ngOnInit() {
        this.currentDate = new Date().toISOString().substring(0, 10);;
        this.getReporte();
    }

    constructor(
        private reporteService: ReporteService,
        private router: Router,
        private oauthService: OAuthService
    ) { }

    private getReporte() {        
        this.reporteService.getReport(this.currentDate, "Taquilla")   
        .subscribe((response: any) => {
            console.log('Get Report  success', response);
            this.reportData = this.parseResponse(response);
            console.log(this.reportData);
          }, error => {
            console.log('Get report Fail', error);      
          });
    }

    private parseResponse (response) {
       let entradas = 0;
       let total = 0;
       response.forEach(element => {
           element.funciones.forEach(func => {
               entradas += parseInt(func.entradas.split(',').join(''));
               total += parseInt(func.total.split(',').join(''));
           })
           element.funciones.push({"entradas": entradas, "total": total});
           entradas = 0;
           total = 0;
       })
       return response;
    }
}
