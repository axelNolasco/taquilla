import { Component, OnInit } from '@angular/core';

import { PeliculasService } from "../services/peliculas.service";
import { SalasService } from "../services/salas.service";
import { PagosService } from "../services/pagos.service";
import { TicketsService } from "../services/tickets.service";
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-taquilla',
  templateUrl: './taquilla.component.html',
  styleUrls: ['./taquilla.component.scss']
})
export class TaquillaComponent implements OnInit {
  public complejos: Array<any> = [
    {
      label: 'Plaza San Javier',
      value: 'san_javier'
    }
  ];
  public currentComplejo = this.complejos[0];
  public fechas: any;
  public selectedDate: string;
  public peliculas: any;
  public selectedHorario: any;
  public totalTickets: number = 0;
  public total: number = 0;
  public selectedMovie: any;
  public seats: any;
  public selectedSeats: any = [];
  public showPrintSection: boolean = false;
  public userName: string = this.oauthService.getIdentityClaims()['username'];
  public reimpresionAccess: boolean = true;
  
  constructor(
    private peliculasService: PeliculasService,
    private salasService: SalasService,
    private pagosService: PagosService,
    private router: Router,
    private oauthService: OAuthService,
    private ticketsService: TicketsService
  ) { }

  ngOnInit() {
    this.checkReimpresionAccess();
    this.getPeliculas('');
    this.getFechas();
  }

  private checkReimpresionAccess() {
    let userData: any = this.oauthService.getIdentityClaims();
    this.reimpresionAccess = userData.permisos.some(access => access.key.includes('reimpresion'));
  }

  private getPeliculas(date) {
    this.peliculas = [];
    this.peliculasService.getPeliculas(date)
    .subscribe(response => {
      console.log(response);
      this.peliculas = response;
    }, error => {
      console.log(error);
    });
  }

  private getFechas() {
    this.peliculasService.getFechas()
    .subscribe(response => {
      console.log(response);
      this.fechas = response;
      this.selectedDate = this.fechas[0];
    }, error => {
      console.log(error);
    });
  }

  public handleDateChange() {
    console.log(this.selectedDate);
    this.resetDataToDefaultValues();
    this.getPeliculas(this.selectedDate);
  }

  private resetDataToDefaultValues() {
    this.selectedHorario = null;
    this.totalTickets = 0;
    this.total = 0;
    this.selectedMovie = null;
    this.seats = [];
    this.selectedSeats = [];
  }

  public handleHorarioSelection(horario, pelicula) {
    console.log(horario);
    this.resetDataToDefaultValues();
    this.selectedHorario = horario;
    this.selectedMovie = pelicula;
    this.selectedHorario.precios.map(precio => precio.boletos = 0);
  }

  public handleDecreaseButton(precio) {
    console.info('handleDecreaseNormalButton method', precio);

    if(this.totalTickets <= 0 || precio.boletos <= 0) {
      return;
    }

    this.totalTickets--;
    precio.boletos--;
    this.total -= Number(precio.precio);
  }
  
  public handleIncreaseButton(precio) {
    console.info('handleIncreaseNormalButton method', precio);
    
    if(this.totalTickets >= 8 || precio.boletos >= 8) {
      return;
    }
    
    this.totalTickets++;
    precio.boletos++;
    this.total += Number(precio.precio);
  }

  public handleNextButton() {
    this.getRoomData();
  }

  private getRoomData() {
    const salaId = this.selectedHorario.id;
    this.salasService.getSalaById(salaId)
    .subscribe(response => {
      console.log(response);
      this.seats = response['distribucion'];
    }, error => {
      console.log(error);
    });
  }

  public handleSeatButton(seat) {
    debugger
    if (seat.tipo == 0  || seat.ocupado === true) {
      return;
    }

    if (seat.active && seat.active === true) {
      seat.active = false;
      this.removeSeat(seat);
    } else if (this.selectedSeats.length >= this.totalTickets) {
      console.log('limite alcanzado'); 
      return;
    } else {
      seat.active = true;
      this.addSeat(seat);
    }
  }

  private addSeat(seat) {
    this.selectedSeats.push(seat);
  }

  private removeSeat(seat) {
    this.selectedSeats.forEach((currentSeat, index) => {
      if(currentSeat.id === seat.id) {
        this.selectedSeats.splice(index, 1); 
      }
    });
  }

  public handlePrintButton() {
    console.log("printing...", this.selectedSeats);
    this.payTickets();
  }

  private payTickets() {
    const horarioId = this.selectedHorario.id;
    const paymentData: any = {
      type: "taquilla",
	    asientos: []
    };

    this.selectedSeats.forEach(seat => paymentData.asientos.push(seat.id));
    this.pagosService.payTickets(horarioId, paymentData)
    .subscribe((response: any) => {
      console.log(response);
      this.printTickets(response.id);
    }, error => {
      console.log(error);
    })
  }

  private printTickets(id) {
    let printData: any = {
      user: this.userName,
      pelicula: this.selectedMovie.nombre,
      clasificacion: this.selectedMovie.clasificacion,
      duracion: this.selectedMovie.duracion,
      idioma: this.selectedMovie.idioma,
      fecha: this.parseDate(this.selectedDate),
      boleto: id,
      codigo: id,
      sala: this.selectedHorario.sala.nombre,
      horario: this.selectedHorario.hora,
      seat: [],
      precios: this.selectedHorario.precios
    };
    this.selectedSeats.forEach(seat => printData.seat.push(seat.nombre));
    console.log(printData);
    this.resetDataToDefaultValues();
    this.ticketsService.printTickets(printData)
    .subscribe((response: any) => {
      console.log(response);
    }, error => {
      console.log(error);
    });
    // let printButton = document.getElementById('imprimir');
    // printButton.click();
  }

  private parseDate(date) {
    let newdate = new Date(date);
    let dia =  newdate.toLocaleString("es", { weekday: 'long' });
    let diaNumber =  newdate.toLocaleString("es", { day: "numeric" });
    let month =  newdate.toLocaleString("es", { month: "long" });
    let year = newdate.toLocaleString("es", { year: "numeric"});
    let newDformat =  dia.charAt(0).toUpperCase() + dia.slice(1) + " " + diaNumber + " " +  month.charAt(0).toUpperCase() + month.slice(1) + " " + year;

    return newDformat;
  }

  public handleLogOut() {
    console.log('Log out event');
    this.oauthService.logOut();
    this.router.navigate(['/']);
  }
}
