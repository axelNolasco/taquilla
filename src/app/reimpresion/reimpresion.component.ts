import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TicketsService } from '../services/tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reimpresion',
  templateUrl: './reimpresion.component.html',
  styleUrls: ['./reimpresion.component.scss']
})
export class ReimpresionComponent implements OnInit {

  public searchForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    date: new FormControl('',Validators.required),
  });

  public currentDate: string = new Date().toISOString().split('T')[0];
  public ticketsFound: any[];
  public showSearchResults: boolean = false;
  public showPrintSection: boolean = false;

  constructor(
    private ticketsService: TicketsService,
    private router: Router
  ) { }

  ngOnInit() {}

  public handleSearchEvent() {
    if (this.searchForm.valid) {
      console.log('handleSearchEvent valid form');
      this.getTickets();
    }
  }

  private getTickets() {
    this.ticketsService.getSalaByEmailAndDate(this.searchForm.value.email, this.searchForm.value.date)
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

  public handlePrintButton(ticketData) {
    console.log(ticketData);
    let printData: any = {
      pelicula: ticketData.pelicula,
      clasificacion: ticketData.clasificacion,
      duracion: ticketData.duracion,
      idioma: ticketData.idioma,
      fecha: ticketData.fecha,
      boleto: ticketData.id,
      codigo: ticketData.id,
      sala: ticketData.sala,
      horario: ticketData.hora,
      seat: []
    };

    ticketData.asientos.forEach(seat => printData.seat.push(seat.nombre));
    console.log(printData);
    this.ticketsService.printTickets(printData)
    .subscribe((response: any) => {
      console.log(response);
    }, error => {
      console.log(error);
    });
    this.markTicketAsInvalid(ticketData.hash);
  }
  
  private markTicketAsInvalid(hash) {
    this.ticketsService.getTicketReimpresion(hash)
    .subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['taquilla']);
    }, error => {
      console.log(error);
    });
  }
}
