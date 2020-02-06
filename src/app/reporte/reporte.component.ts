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
        this.currentDate = this.formatDate(Date());
        this.getReporte();
    }

    constructor(
        private reporteService: ReporteService,
        private router: Router,
        private oauthService: OAuthService
    ) { }

    private formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    private getReporte() {        
        this.reporteService.getReport(this.currentDate, "Taquilla")   
        .subscribe((response: any) => {            
            this.reportData = this.parseResponse(response);
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

    private updateReport(event) {
        var d = event.value,
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        let selectedDate = [year, month, day].join('-');
        this.currentDate = selectedDate;
        this.getReporte();
    }
}
