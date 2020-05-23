import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TicketsService } from '../services/tickets.service';
import { CancelarService } from '../services/cancelar.service';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrManager } from 'ng6-toastr-notifications';

export interface DialogData {
  user:     string;
  password: string;
  motivo:   string;
}

@Component({
  selector: 'app-reimpresion',
  templateUrl: './reimpresion.component.html',
  styleUrls: ['./reimpresion.component.scss']
})
export class ReimpresionComponent implements OnInit {

  user:     string;
  password: string;
  motivo:   string;

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
    private oauthService: OAuthService,
    public dialog: MatDialog,
    public toastr: ToastrManager
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
    
    this.ticketsService.getValidacion(ticketData.hash)
    .subscribe((response: any) => {
      console.log(response);
    }, error => {
      this.toastr.warningToastr(error.error.message);
      console.log(error);
    });
    
    this.ticketsService.printTickets(printData)
    .subscribe((response: any) => {
      console.log(response);
      this.getTickets();
    }, error => {
      console.log(error);
    });
  }

 

  public handleCancelarButton(seat, seatCount, user, password, motivo) {
    let deleteAll = seatCount <= 1 ? 1:0;
    this.cancelarService.cancelTicket(seat.id_relacion_boleto, deleteAll, user, password, motivo)
    .subscribe((response: any) => {
      this.toastr.successToastr('Boleto cancelado!');
      this.getCurrentUserTickets();
    }, error => {
      this.toastr.errorToastr(error.error.message);
    }); 
  }

  public handleCancelarButtonCode(seat, seatCount, user, password, motivo) {
    let deleteAll = seatCount <= 1 ? 1:0;
    this.cancelarService.cancelTicket(seat.id_relacion_boleto, deleteAll, user, password, motivo)
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

  openDialog(seat, seatCount, byCode = false): void {
    const dialogRef = this.dialog.open(CancelacionModal, {
      width: '260px',
      data: {
        user:      this.user,
        password:  this.password,
        motivo:    this.motivo,
        seat:      seat,
        seatCount: seatCount
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (byCode) {
        this.handleCancelarButtonCode(result.seat, result.seatCount, result.user, result.password, result.motivo);
      }else {
        this.handleCancelarButton(result.seat, result.seatCount, result.user, result.password, result.motivo);
      }      
    });
  }
}

@Component({
  selector: 'cancelacion-modal',
  templateUrl: 'cancelacion-modal.html',
})

export class CancelacionModal {

  constructor(
    public dialogRef: MatDialogRef<CancelacionModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}