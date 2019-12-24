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
  selector: 'app-cambio',
  templateUrl: './cambio.component.html',
  styleUrls: ['./cambio.component.scss']
})

export class CambioComponent implements OnInit {
  public searchForm: FormGroup = new FormGroup({
      codigoBoleto: new FormControl('',Validators.required),
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


  // data for taquilla changue ticket
  public currentDate: string = new Date().toISOString().split('T')[0];
  public ticketsFound: any[];
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

  ngOnInit() {    
    this.getFechas();
    this.getPeliculas('');
    console.log("cambio de boletos");
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


  // Reset cambio
  public resetDataCambio() {
    this.selectedHorario = null;
    this.totalTickets = 0;
    this.total = 0;
    this.selectedMovie = null;
    this.seats = [];
    this.selectedSeats = [];
    this.selectedPrecios = [];
    this.preciosToPrint = [];
    console.log('Reset values');
  }

  public handleHorarioSelection(horario, pelicula) {
    this.resetDataCambio();
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
    if (this.total < 1) {
      this.totalTickets++;
      precio.boletos++;
      this.total += Number(precio.precio);
      this.addPrecio(precio.id);
    }
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
    this.getRoomData();
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

  public handlePrintButton() {
    this.cancelarBoleto();
  }

  private cancelarBoleto() {
    let deleteAll = this.seatCount <= 1 ? 1:0;
    this.cancelarService.cancelTicket(this.seatToChage.id_relacion_boleto, deleteAll)
    .subscribe((response: any) => {
      this.payTickets();
    }, error => {
      console.log(error);
      return false;
    }); 
  }

  
  public handleCambioButtonCode(seat, seatCount) {
    this.seatToChage = seat;
    this.seatCount = seatCount;
    console.log(seat, seatCount);
  }

  private payTickets() {    
    const horarioId = this.selectedHorario.id;
    const paymentData: any = {
      type: "taquilla",
      asientos: [],
      precios: this.selectedPrecios
    };
    this.selectedSeats.forEach(seat => paymentData.asientos.push(seat.id));    
    this.pagosService.payTickets(horarioId, paymentData)
    .subscribe((response: any) => {
      this.printTickets(response.id);
    }, error => {
      console.log(error);
    })
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
    this.resetDataCambio();
    this.getPeliculas(this.selectedDate);
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
      precios: this.preciosToPrint,
      reImprecion: false
    };

    this.selectedSeats.forEach(seat => printData.seat.push(seat.nombre));
    this.resetDataCambio();
    this.ticketsService.printTickets(printData)
    .subscribe((response: any) => {
      console.log(response);
    }, error => {
      console.log(error);
    });

    this.resetDataCambio();
    // let printButton = document.getElementById('imprimir');
    // printButton.click();
  }

  private parseDate(date) {

    let newdate = new Date(date).toISOString();
    //let dia =  newdate.toLocaleString("es", { weekday: 'long' });
    //let diaNumber =  newdate.toLocaleString("es", { day: "numeric" });
    //let month =  newdate.toLocaleString("es", { month: "long" });
    //let year = newdate.toLocaleString("es", { year: "numeric"});
    //let newDformat =  dia.charAt(0).toUpperCase() + dia.slice(1) + " " + diaNumber + " " +  month.charAt(0).toUpperCase() + month.slice(1) + " " + year;

    return newdate;
  }

  //end ticket buy

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

  public handleResetButton () {    
    this.ticketsFound = [];
    this.showSearchResults = false;
    this.searchForm.reset();
  }
}
