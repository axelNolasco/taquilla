import { Component, OnInit } from '@angular/core';
import { CancelarService } from '../services/cancelar.service';
import { PeliculasService } from "../services/peliculas.service";
import { SalasService } from "../services/salas.service";
import { PagosService } from "../services/pagos.service";
import { TicketsService } from "../services/tickets.service";
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.scss']
})

export class ReservacionesComponent implements OnInit {
    
    ngOnInit() {
        this.getFechas();
        this.getPeliculas('');
        this.getReservaciones();
        console.log("cambio de boletos");
    }

    public reservacionForm: FormGroup = new FormGroup({
        nombreReservacion: new FormControl('',Validators.required),
    });

     //data for taquilla flow
  public fechas: any;
  public selectedDate: string;
  public peliculas: any;
  public selectedHorario: any;
  public totalTickets: number = 0;
  public total: number = 0;
  public selectedMovie: any;
  public seats: any;
  public selectedSeats: any = [];
  public selectedPrecios: any = [];
  public preciosToPrint: any = [];
  public showPrintSection: boolean = false;
  public userName: string = this.oauthService.getIdentityClaims()['username'];
  public reimpresionAccess: boolean = true;
  public name: string;
  


  // data for taquilla changue ticket
  public currentDate: string = new Date().toISOString().split('T')[0];
  public ticketsFound: any[];
  public displayedColumns: string[] = ['nombre', 'pelicula', 'hora', 'fecha', 'customColumn', 'asientos', 'actionColunm'];
  public showSearchResults: boolean = false;
  public userTickets: any;


  //cambio data
  private seatToChage: any;
  private seatCount: any;
  
  constructor(
    private cancelarService: CancelarService,
    private peliculasService: PeliculasService,
    private salasService: SalasService,
    private pagosService: PagosService,
    private ticketsService: TicketsService,
    private router: Router,
    private oauthService: OAuthService,
  ) { }

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
    this.resetDataReservacion();
    this.getPeliculas(this.selectedDate);
  }
  //Get list of movies
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

  //Get Reservaciones
  private getReservaciones() {
    this.ticketsService.getReservaciones()
    .subscribe((getTicketsResponse: any[]) => {
      console.log('getReservaciones', getTicketsResponse);
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


  // Reset cambio
  public resetDataReservacion() {
    this.selectedHorario = null;
    this.totalTickets = 0;
    this.total = 0;
    this.selectedMovie = null;
    this.seats = [];
    this.selectedSeats = [];
    this.selectedPrecios = [];
    this.preciosToPrint = [];
    this.name = "";
    this.reservacionForm.reset();
    console.log('Reset values');
  }

  public handleHorarioSelection(horario, pelicula) {
    this.resetDataReservacion();
    this.selectedHorario = horario;
    this.selectedMovie = pelicula;
    this.selectedHorario.precios.map(precio => precio.boletos = 0);
    console.log("selected time");
  }

  public handleDecreaseButton(precio) {
    if(this.totalTickets <= 0 || precio.boletos <= 0) {
      return;
    }

    this.totalTickets--;
    precio.boletos--;
    this.total -= Number(precio.precio);
    this.removePrecio(precio.id);
  }

  public handleIncreaseButton(precio) {
      this.totalTickets++;
      precio.boletos++;
      this.total += Number(precio.precio);
      this.addPrecio(precio.id);
  }

  private addPrecio(id) {
    this.selectedPrecios.push(id);
    for (var i = 0; i < this.selectedHorario.precios.length; i++) {
      if (this.selectedHorario.precios[i].id == id) {
        this.preciosToPrint.push(this.selectedHorario.precios[i]);
        break;
      }
    }
    console.log(this.preciosToPrint);
  }
  
  private removePrecio(id) {
    for (var i = 0; i < this.selectedPrecios.length; i++) {
      if (this.selectedPrecios[i] == id) {
        this.selectedPrecios.splice(i, 1);
        break;
      }
    }
    for (var i = 0; i < this.preciosToPrint.length; i++) {
      if (this.preciosToPrint[i].id == id) {
        this.preciosToPrint.splice(i, 1);
        break;
      }
    }
    console.log(this.preciosToPrint);
  }

  public handleNextButton() {
    if (this.reservacionForm.valid) {
        console.log('Event correct with name');
        this.name = this.reservacionForm.value.nombreReservacion;
        this.getRoomData();
      }
  }

  private getRoomData() {
    const salaId = this.selectedHorario.id;
    this.salasService.getSalaById(salaId)
    .subscribe(response => {
      
      this.seats = response['distribucion'];
    }, error => {
      console.log(error);
    });
  }

  public handleSeatButton(seat) {
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

  public handleReservarButon() {
      console.log("Reservar");
      this.reservarTickets();
  }

  private reservarTickets() {    
    const horarioId = this.selectedHorario.id;
    const paymentData: any = {
      type: "taquilla",
      nombre: this.name,
      asientos: [],
      precios: this.selectedPrecios
    };
    this.selectedSeats.forEach(seat => paymentData.asientos.push(seat.id));    
    this.ticketsService.reservarTickets(horarioId, paymentData)
    .subscribe((response: any) => {
      this.resetDataReservacion();
      this.getReservaciones();
      console.log("Reservacion echa!");      
    }, error => {
      console.log(error);
    })
  }

  public cancelarReservacion(id) {
    this.ticketsService.cancelResevacion(id)
    .subscribe((response: any) => {
      console.log("Reservacion cancelada!");
      this.getReservaciones();
    }, error => {
      console.log(error);
    })
  }
}
