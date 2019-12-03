import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TicketsService } from '../services/tickets.service';
import { CancelarService } from '../services/cancelar.service';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-reimpresion',
  templateUrl: './reimpresion.component.html',
  styleUrls: ['./reimpresion.component.scss']
})
export class ReimpresionComponent implements OnInit {

  public searchForm: FormGroup = new FormGroup({
    codigoBoleto: new FormControl('',Validators.required),
  });

  public currentDate: string = new Date().toISOString().split('T')[0];
  public ticketsFound: any[];
  public showSearchResults: boolean = false;
  public showPrintSection: boolean = false;
  public userTickets: any;
  public userName: string = this.oauthService.getIdentityClaims()['username'];

  constructor(
    private ticketsService: TicketsService,
    private cancelarService: CancelarService,
    private router: Router,
    private oauthService: OAuthService
  ) { }

  ngOnInit() {
    this.getCurrentUserTickets();
  }

  private getCurrentUserTickets() {
    console.log('getCurrentUserTickets method');
    
    this.ticketsService.getCurrentUserTickets()
    .subscribe((response: any) => {
      console.log('getCurrentUserTickets success', response);
      this.userTickets = response;
    }, error => {
      console.log('getCurrentUserTickets success', error);      
    });
  }

  public handleSearchEvent() {
    if (this.searchForm.valid) {
      console.log('handleSearchEvent valid form');
      this.getTickets();
    }
  }

  private getTickets() {
    this.ticketsService.getByCodigo(this.searchForm.value.codigoBoleto)
    .subscribe((getTicketsResponse: any[]) => {
      console.log('getTicketsResponse', getTicketsResponse);
      this.showSearchResults = true;
      if(getTicketsResponse.length > 0) {
        this.ticketsFound = getTicketsResponse;
      } else {
        this.ticketsFound = null;
      }
    }, error => {
      console.log('getTicketsResponse error', error);
      
    });
  }

  public handlePrintButton(ticketData, seat) {    
    let printData: any = {
      user: this.userName,
      pelicula: ticketData.pelicula,
      clasificacion: ticketData.clasificacion,
      duracion: ticketData.duracion,
      idioma: ticketData.idioma,
      fecha: this.parseDate(ticketData.fecha),
      boleto: ticketData.id,
      codigo: ticketData.id,
      sala: ticketData.sala,
      horario: ticketData.hora,
      seat: [seat.nombre],
      precios: ticketData.preciosCount,
      reImprecion: true
    };
    
    this.ticketsService.printTickets(printData)
    .subscribe((response: any) => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  public handleCancelarButton(seat, seatCount) {
    let deleteAll = seatCount <= 1 ? 1:0;
    this.cancelarService.cancelTicket(seat.id_relacion_boleto, deleteAll)
    .subscribe((response: any) => {
      console.log(response);
      this.getCurrentUserTickets();
    }, error => {
      console.log(error);
    }); 
  }

  public handleCancelarButtonCode(seat, seatCount) {
    let deleteAll = seatCount <= 1 ? 1:0;
    this.cancelarService.cancelTicket(seat.id_relacion_boleto, deleteAll)
    .subscribe((response: any) => {
      console.log(response);
      this.getTickets();
    }, error => {
      console.log(error);
    }); 
  }

  public handleResetButton () {    
    this.ticketsFound = [];
    this.showSearchResults = false;
    this.searchForm.reset();
  }
  
  private parseDate(date) {
    let newdate = new Date(date.replace(/-/g, '\/'));
    let dia =  newdate.toLocaleString("es", { weekday: 'long' });
    let diaNumber =  newdate.toLocaleString("es", { day: "numeric" });
    let month =  newdate.toLocaleString("es", { month: "long" });
    let year = newdate.toLocaleString("es", { year: "numeric"});
    let newDformat =  dia.charAt(0).toUpperCase() + dia.slice(1) + " " + diaNumber + " " +  month.charAt(0).toUpperCase() + month.slice(1) + " " + year;

    return newDformat;
  }
}
