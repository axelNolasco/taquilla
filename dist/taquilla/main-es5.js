(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cambio/cambio.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cambio/cambio.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <div class=\"header-container\">\r\n    <h1 class=\"reimpresion-label\">Cambio de boletos</h1>\r\n    <div class=\"side-menu\">\r\n      <button\r\n      mat-button\r\n      routerLink=\"/taquilla\"><h3>Volver</h3></button>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n  \r\n<mat-horizontal-stepper #stepper>\r\n  <mat-step [stepControl]=\"0\">\r\n    <mat-card>\r\n      <mat-card-title> <span (click)=\"resetDataCambio()\">Ingrese datos de busqueda</span></mat-card-title>\r\n      <br>\r\n      <mat-card-content>\r\n        <form [formGroup]=\"searchForm\" (ngSubmit)=\"handleSearchEvent()\">\r\n          <mat-form-field>\r\n            <input type=\"text\" matInput placeholder=\"Codigo Boleto\" formControlName=\"codigoBoleto\">\r\n          </mat-form-field>\r\n          <button type=\"submit\" mat-button>Buscar</button>\r\n          <button mat-button (click)=\"handleResetButton(); $event.stopPropagation();\">Reiniciar</button>\r\n        </form>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card *ngIf=\"showSearchResults\" class=\"search-results\">\r\n      <mat-card-content *ngIf=\"!ticketsFound\" class=\"no-tickets\">\r\n        <h2>Ningun boleto encontrado</h2>\r\n      </mat-card-content>\r\n      <mat-card-content *ngIf=\"ticketsFound\" class=\"tickets-list\">\r\n          <h2>Boleto encontrado</h2>\r\n        <mat-card *ngFor=\"let ticket of ticketsFound\" class=\"ticket\">\r\n            <mat-card-title>{{ticket.pelicula}}</mat-card-title>\r\n            <mat-card-content>\r\n              <h3>{{ticket.sala}}</h3>\r\n              <h3>Asientos {{ticket.asientos.length}}</h3>\r\n              <h3>Hora: {{ticket.hora}}</h3>\r\n              <div *ngFor=\"let seat of ticket.asientos\">\r\n                <h4>\r\n                  {{seat.nombre}} \r\n                  <button mat-button matStepperNext (click)=\"handleCambioButtonCode(seat, ticket.asientos.length)\">cambiar</button>\r\n                </h4>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </mat-step>\r\n  <!-- Movie selection -->\r\n \r\n  <mat-step [stepControl]=\"1\">\r\n      <div class=\"fechas-container\"> \r\n        <mat-form-field>\r\n          <mat-label>Fechas</mat-label>\r\n          <mat-select\r\n            [(ngModel)]=\"selectedDate\"\r\n            (ngModelChange)=\"handleDateChange()\">\r\n            <mat-option *ngFor=\"let fecha of fechas\" [value]=\"fecha\">\r\n              {{fecha | date}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"peliculas-container\">\r\n          <div\r\n            class=\"pelicula\"\r\n            *ngFor=\"let pelicula of peliculas\">\r\n            <mat-card>\r\n                <img [src]=\"pelicula.cartelUrl\" alt=\"\">\r\n                <mat-card-title>{{pelicula.nombre}}</mat-card-title>\r\n                <div class=\"horarios-container\">\r\n                  <div \r\n                    *ngFor=\"let horario of pelicula.horarios\">\r\n                    <div\r\n                      class=\"horario\"\r\n                      (click)=\"handleHorarioSelection(horario, pelicula)\">\r\n                      <h5\r\n                        class=\"hora\"\r\n                        [ngClass]=\"{'active': horario.id === selectedHorario?.id }\">\r\n                        {{horario.hora}}\r\n                      </h5>\r\n                      <h5 class=\"sala\">{{horario.sala.nombre}}</h5>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </mat-card>\r\n          </div>\r\n        </div>\r\n        <mat-card *ngIf=\"selectedHorario\">\r\n            <mat-card-title>Boletos: {{totalTickets}} - {{total | currency}}</mat-card-title>\r\n            <div>\r\n              <mat-card\r\n                class=\"precio-container\"\r\n                *ngFor=\"let precio of selectedHorario.precios\">\r\n                <div (click)=\"handleDecreaseButton(precio)\">\r\n                    <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">remove</mat-icon>\r\n                </div>\r\n                <div>\r\n                  <h4>{{ precio.nombre }}</h4>\r\n                  <h3>{{precio.boletos}}</h3>\r\n                  <h5>$ {{ precio.precio }}</h5>\r\n                </div>\r\n                <div (click)=\"handleIncreaseButton(precio)\">\r\n                    <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">add</mat-icon>\r\n                </div>\r\n              </mat-card>\r\n              <div class=\"next-button button-select-seat\" *ngIf=\"totalTickets > 0\">\r\n                <button\r\n                  mat-button\r\n                  matStepperNext\r\n                  (click)=\"handleNextButton()\"><h3>Selecccionar asientos</h3></button>\r\n              </div>\r\n            </div>\r\n        </mat-card>\r\n\r\n\r\n  </mat-step>\r\n  <!-- seat selection -->\r\n  <mat-step  *ngIf=\"totalTickets > 0\">\r\n    <ng-template matStepLabel>Cambiar por</ng-template>\r\n      <div class=\"asientos-container\">\r\n        <div class=\"movie-card\">\r\n            <mat-card>\r\n              <img [src]=\"selectedMovie.cartelUrl\" alt=\"\">\r\n              <mat-card-title>{{selectedMovie.nombre}}</mat-card-title>\r\n              <div class=\"horarios-container\">\r\n                <div\r\n                  class=\"horario\">\r\n                  <h5\r\n                    class=\"hora\">\r\n                    {{selectedHorario.hora}}\r\n                  </h5>\r\n                  <h5 class=\"sala\">{{selectedHorario.sala.nombre}}</h5>\r\n                </div>\r\n              </div>\r\n          </mat-card>\r\n          <div\r\n            *ngIf=\"this.selectedSeats.length >= this.totalTickets\"\r\n            class=\"print-button-container\">\r\n              <button\r\n              mat-button\r\n              matStepperNext\r\n              (click)=\"handlePrintButton(); stepper.reset()\"><h3>Imprimir asientos</h3></button>\r\n          </div>\r\n        </div>\r\n        <div class=\"asientos\">\r\n          <h2>{{ totalTickets }} boletos | {{total | currency}}</h2>\r\n          <div class=\"table-window\">\r\n            <div class=\"seats-table-container\">\r\n              <table>\r\n                <tr *ngFor=\"let row of seats\">\r\n                  <td class=\"seat-letter\">{{ row.asientos[0].fila }}</td>\r\n                  <td\r\n                    *ngFor=\"let seat of row.asientos\"\r\n                    (click)=\"handleSeatButton(seat)\"\r\n                    class=\"seat\"\r\n                    [ngClass]=\"{'active': seat.active && !seat.ocupado, 'hidden': seat.tipo === 0, 'special': seat.tipo === 2, 'disabled': seat.ocupado, 'apartado': seat.apartado && !seat.active }\">\r\n                    {{seat.tipo !== 0 ? seat.numero <= 9 ? '' + seat.fila  +  seat.numero : '' + seat.fila +  seat.numero  : ''}}\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"screen-section\">\r\n            <p>pantalla</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </mat-step>\r\n  <!-- END seat selection --> \r\n</mat-horizontal-stepper>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cartelera/cartelera.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cartelera/cartelera.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n\r\n    <div class=\"header-container\">\r\n      <div class=\"side-menu\">\r\n          <button mat-button routerLink=\"/login\"><h3>Login</h3></button>\r\n      </div>  \r\n      <h1 class=\"welcome-label\">Bienvenido a la Cinema Plaza San Javier</h1>\r\n        \r\n    </div>\r\n\r\n    <mat-card>\r\n        <h3 class=\"peliculas-title\">Peliculas</h3>\r\n        <br>\r\n        <mat-form-field>\r\n            <mat-label>Fechas</mat-label>\r\n            <mat-select\r\n            [(ngModel)]=\"selectedDate\"\r\n            (ngModelChange)=\"handleDateChange()\">\r\n            <mat-option *ngFor=\"let fecha of fechas\" [value]=\"fecha\">\r\n                {{fecha | date}}\r\n            </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </mat-card>\r\n\r\n    <mat-card class=\"peliculas-container\">\r\n        <div\r\n          class=\"pelicula\"\r\n          *ngFor=\"let pelicula of peliculas\">\r\n          <mat-card>\r\n              <img [src]=\"pelicula.cartelUrl\" alt=\"\">\r\n              <mat-card-title class=\"prelicula-nombre\">{{pelicula.nombre}}</mat-card-title>\r\n              <div class=\"horarios-container\">\r\n                <div \r\n                  *ngFor=\"let horario of pelicula.horarios\">\r\n                  <div\r\n                    class=\"horario\"\r\n                    (click)=\"handleHorarioSelection(horario, pelicula)\">\r\n                    <h5\r\n                      class=\"hora\"\r\n                      [ngClass]=\"{'active': horario.id === selectedHorario?.id }\">\r\n                      {{horario.hora}}\r\n                    </h5>\r\n                    <h5 class=\"sala\">{{horario.sala.nombre}}</h5>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </mat-card>\r\n        </div>\r\n      </mat-card>\r\n\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>Taquilla Plaza San Javier</mat-card-title>\r\n  <mat-card-content>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"handleSubmitEvent()\">\r\n      <p>\r\n        <mat-form-field>\r\n          <input type=\"text\" matInput placeholder=\"Username\" formControlName=\"username\">\r\n        </mat-form-field>\r\n      </p>\r\n      <p>\r\n        <mat-form-field>\r\n          <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\r\n        </mat-form-field>\r\n      </p>\r\n      <p *ngIf=\"error\" class=\"loginError\">\r\n        {{ errorMessage }}\r\n      </p>\r\n      <p class=\"button\">\r\n        <button type=\"submit\" mat-button>Login</button>\r\n      </p>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reimpresion/cancelacion-modal.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reimpresion/cancelacion-modal.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Cancelacion </h1>\r\n<div mat-dialog-content>\r\n  <mat-form-field>\r\n    <mat-label>Usuario</mat-label>\r\n    <input matInput [(ngModel)]=\"data.user\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <mat-label>Password</mat-label>\r\n    <input type=\"password\" matInput [(ngModel)]=\"data.password\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <mat-label>Motivo</mat-label>\r\n    <input matInput [(ngModel)]=\"data.motivo\"  maxlength=\"255\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Cerrar</button>\r\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Cancelar Boleto</button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reimpresion/reimpresion.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reimpresion/reimpresion.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <div class=\"header-container\">\r\n    <h1 class=\"reimpresion-label\">Reimprimir boletos</h1>\r\n    <div class=\"side-menu\">\r\n      <button\r\n      mat-button\r\n      routerLink=\"/taquilla\"><h3>Volver</h3></button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"search-container\">\r\n    <mat-card>\r\n      <mat-card-title>Ingrese datos de busqueda</mat-card-title>\r\n      <br>\r\n      <mat-card-content>\r\n        <form [formGroup]=\"searchForm\" (ngSubmit)=\"handleSearchEvent()\">\r\n          <mat-form-field>\r\n            <input type=\"text\" matInput placeholder=\"Codigo Boleto\" formControlName=\"codigoBoleto\">\r\n          </mat-form-field>\r\n          <button type=\"submit\" mat-button>Buscar</button>\r\n          <button mat-button (click)=\"handleResetButton(); $event.stopPropagation();\">Reiniciar</button>\r\n        </form>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card *ngIf=\"showSearchResults\" class=\"search-results\">\r\n      <mat-card-content *ngIf=\"!ticketsFound\" class=\"no-tickets\">\r\n        <h2>Ningun boleto encontrado</h2>\r\n      </mat-card-content>\r\n      <mat-card-content *ngIf=\"ticketsFound\" class=\"tickets-list\">\r\n          <h2>Boleto encontrado</h2>\r\n        <mat-card *ngFor=\"let ticket of ticketsFound\" class=\"ticket\">\r\n            <mat-card-title>{{ticket.pelicula}}</mat-card-title>\r\n            <mat-card-content>\r\n              <h3>{{ticket.sala}}</h3>\r\n              <h3>Asientos {{ticket.asientos.length}}</h3>\r\n              <h3>Hora: {{ticket.hora}}</h3>\r\n              <h3 *ngIf=\"ticket.user_id != 99999\">Nombre: {{ticket.vendedor}}</h3>\r\n              <h3 *ngIf=\"ticket.user_id == 99999\">Nombre: {{ticket.usuario}}</h3>\r\n              <h3 *ngIf=\"ticket.reclamado == 0\">Boleto: Disponible</h3>\r\n              <h3 *ngIf=\"ticket.reclamado == 1\">Boleto: Utilizado</h3>\r\n              <div *ngFor=\"let seat of ticket.asientos\">\r\n                <h4>\r\n                  {{seat.nombre}} \r\n                  <!--<button mat-button  (click)=\"handleCancelarButton(seat, ticket.asientos.length)\">Cancelar</button>-->\r\n                  <button mat-button (click)=\"openDialog(seat, ticket.asientos.length, true)\">Cancelar</button>\r\n                  <button mat-button (click)=\"handlePrintButton(ticket, seat)\">Imprimir</button>\r\n                </h4>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <br><br>\r\n  <div class=\"user-tickets-container\">\r\n    <mat-card>\r\n      <mat-card-title>Seleccione ticket por venta</mat-card-title>\r\n      <mat-card-content *ngIf=\"!userTickets\" class=\"no-tickets\">\r\n        <h2>Ningun ticket encontrado</h2>\r\n      </mat-card-content>\r\n      <mat-card-content *ngIf=\"userTickets\" class=\"tickets-list\">\r\n        <mat-card *ngFor=\"let ticket of userTickets\" class=\"ticket\">\r\n          <mat-card-title>{{ticket.pelicula}}</mat-card-title>\r\n          <mat-card-content>\r\n            <h3>{{ticket.sala}}</h3>\r\n            <h3>Asientos {{ticket.asientos.length}}</h3>\r\n            <h3>Hora: {{ticket.hora}}</h3>\r\n            <h3>Nombre: {{ticket.vendedor}}</h3>\r\n            <div *ngFor=\"let seat of ticket.asientos\">\r\n              <h4>\r\n                {{seat.nombre}} \r\n                <!--<button mat-button  (click)=\"handleCancelarButton(seat, ticket.asientos.length)\">Cancelar</button>-->\r\n                <button mat-button (click)=\"openDialog(seat, ticket.asientos.length, false)\">Cancelar</button>\r\n                <button mat-button (click)=\"handlePrintButton(ticket, seat)\">Imprimir</button>\r\n              </h4>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </mat-card-content>\r\n      <br>\r\n    </mat-card>\r\n  </div>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reporte/reporte.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reporte/reporte.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <div class=\"header-container\">\r\n    <h1 class=\"reimpresion-label\">Reporte de {{currentDate}}</h1>\r\n    <br>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Seleciona una fecha\" (dateChange)=\"updateReport($event)\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\">\r\n        <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n      </mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n    <div class=\"side-menu\">\r\n      <button\r\n      mat-button\r\n      routerLink=\"/taquilla\"><h3>Volver</h3></button>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n<mat-card>\r\n<table>\r\n      <thead>\r\n        <th>Pelicula</th>\r\n        <th>Distribuidora</th>\r\n        <th>Fecha</th>\r\n        <th>Hora</th>\r\n        <th>Sala</th>\r\n        <th>Tipo</th>\r\n        <th>Precio</th>\r\n        <th>Entradas</th>\r\n        <th>Total</th>\r\n      </thead> \r\n    <ng-container *ngFor=\"let rd of reportData; let funcIndex = index;\"> \r\n      <tbody>\r\n        <ng-container  *ngIf=\"funcIndex!=(reportData.length-1)\">\r\n            <tr class=\"nombre-pelicula\">\r\n              <td [attr.rowspan]=\"rd.funciones.length\">{{rd.nombre}}</td>\r\n            </tr>\r\n          <ng-container>\r\n              <ng-container *ngFor=\"let func of rd.funciones; let i= index;\">\r\n                <tr class=\"func-info\" *ngIf=\"i!=rd.funciones.length-1\">\r\n                    <td>{{func.nombre_distribuidor}}</td>\r\n                    <td>{{func.fecha}}</td>\r\n                    <td>{{func.hora}}</td>\r\n                    <td>{{func.sala}}</td>\r\n                    <td>{{func.tipo}}</td>\r\n                    <td>{{func.precio | currency}}</td>\r\n                    <td>{{func.entradas}}</td>\r\n                    <td>{{func.total}}</td>\r\n                </tr>\r\n                <tr class=\"func-info totales-funcion\" *ngIf=\"i==rd.funciones.length-1\">\r\n                  <td [attr.colspan]=\"7\"></td>\r\n                  <td>{{func.entradas}}</td>\r\n                  <td>{{func.total | currency}}</td> \r\n                </tr>\r\n            </ng-container>\r\n          </ng-container>\r\n        </ng-container>\r\n        <!-- report -->\r\n        <ng-container *ngIf=\"funcIndex==(reportData.length-1)\">\r\n          <tr class=\"totales\">\r\n            <td [attr.colspan]=\"7\">{{rd.nombre}}</td>\r\n            <td>{{rd.entradas}}</td>\r\n            <td>{{rd.total | currency}}</td> \r\n        </tr>\r\n      </ng-container>\r\n    </tbody>  \r\n    </ng-container>\r\n</table>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reservaciones/reservaciones.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reservaciones/reservaciones.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <div class=\"header-container\">\r\n      <h1 class=\"reimpresion-label\">Reservacion de boletos</h1>\r\n      <div class=\"side-menu\">\r\n        <button\r\n        mat-button\r\n        routerLink=\"/taquilla\"><h3>Volver</h3></button>\r\n      </div>\r\n    </div>\r\n  </mat-card>\r\n    \r\n  <mat-horizontal-stepper #stepper>   \r\n    <mat-step [stepControl]=\"0\">\r\n      <ng-template matStepLabel> <span (click)=\"resetDataReservacion()\">Selecciona tu pelicula</span></ng-template>\r\n        <div class=\"fechas-container\"> \r\n          <mat-form-field>\r\n            <mat-label>Fechas</mat-label>\r\n            <mat-select\r\n              [(ngModel)]=\"selectedDate\"\r\n              (ngModelChange)=\"handleDateChange()\">\r\n              <mat-option *ngFor=\"let fecha of fechas\" [value]=\"fecha\">\r\n                {{fecha | date}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"peliculas-container\">\r\n            <div\r\n              class=\"pelicula\"\r\n              *ngFor=\"let pelicula of peliculas\">\r\n              <mat-card>\r\n                  <img [src]=\"pelicula.cartelUrl\" alt=\"\">\r\n                  <mat-card-title>{{pelicula.nombre}}</mat-card-title>\r\n                  <div class=\"horarios-container\">\r\n                    <div \r\n                      *ngFor=\"let horario of pelicula.horarios\">\r\n                      <div\r\n                        class=\"horario\"\r\n                        (click)=\"handleHorarioSelection(horario, pelicula)\">\r\n                        <h5\r\n                          class=\"hora\"\r\n                          [ngClass]=\"{'active': horario.id === selectedHorario?.id }\">\r\n                          {{horario.hora}}\r\n                        </h5>\r\n                        <h5 class=\"sala\">{{horario.sala.nombre}}</h5>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </mat-card>\r\n            </div>\r\n          </div>\r\n                    \r\n          <mat-card *ngIf=\"selectedHorario\">\r\n            <form [formGroup]=\"reservacionForm\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput placeholder=\"Nombre Reservacion\" formControlName=\"nombreReservacion\">\r\n                </mat-form-field>\r\n            </form>\r\n\r\n              <mat-card-title>Boletos: {{totalTickets}} - {{total | currency}}</mat-card-title>\r\n              <div>\r\n                <mat-card\r\n                  class=\"precio-container\"\r\n                  *ngFor=\"let precio of selectedHorario.precios\">\r\n                  <div (click)=\"handleDecreaseButton(precio)\">\r\n                      <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">remove</mat-icon>\r\n                  </div>\r\n                  <div>\r\n                    <h4>{{ precio.nombre }}</h4>\r\n                    <h3>{{precio.boletos}}</h3>\r\n                    <h5>$ {{ precio.precio }}</h5>\r\n                  </div>\r\n                  <div (click)=\"handleIncreaseButton(precio)\">\r\n                      <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">add</mat-icon>\r\n                  </div>\r\n                </mat-card>\r\n                <div class=\"next-button button-select-seat\" *ngIf=\"totalTickets > 0\">\r\n                  <button\r\n                    mat-button\r\n                    matStepperNext\r\n                    (click)=\"handleNextButton()\"><h3>Selecccionar asientos</h3></button>\r\n                </div>\r\n              </div>\r\n          </mat-card>\r\n    </mat-step>\r\n    <!-- seat selection -->\r\n    <mat-step  *ngIf=\"totalTickets > 0\">\r\n      <ng-template matStepLabel>Reservar</ng-template>\r\n        <div class=\"asientos-container\">\r\n          <div class=\"movie-card\">\r\n              <mat-card>\r\n                <img [src]=\"selectedMovie.cartelUrl\" alt=\"\">\r\n                <mat-card-title>{{selectedMovie.nombre}}</mat-card-title>\r\n                <div class=\"horarios-container\">\r\n                  <div\r\n                    class=\"horario\">\r\n                    <h5\r\n                      class=\"hora\">\r\n                      {{selectedHorario.hora}}\r\n                    </h5>\r\n                    <h5 class=\"sala\">{{selectedHorario.sala.nombre}}</h5>\r\n                  </div>\r\n                </div>\r\n            </mat-card>\r\n            <div\r\n              *ngIf=\"this.selectedSeats.length >= this.totalTickets\"\r\n              class=\"print-button-container\">\r\n                <button\r\n                mat-button\r\n                matStepperNext\r\n                (click)=\"handleReservarButon(); stepper.reset()\"><h3>Reservar asientos</h3></button>\r\n            </div>\r\n          </div>\r\n          <div class=\"asientos\">\r\n            <h2>{{ totalTickets }} boletos | {{total | currency}} | {{name}} </h2>\r\n            <div class=\"table-window\">\r\n              <div class=\"seats-table-container\">\r\n                <table>\r\n                  <tr *ngFor=\"let row of seats\">\r\n                    <td class=\"seat-letter\">{{ row.asientos[0].fila }}</td>\r\n                    <td\r\n                      *ngFor=\"let seat of row.asientos\"\r\n                      (click)=\"handleSeatButton(seat)\"\r\n                      class=\"seat\"\r\n                      [ngClass]=\"{'active': seat.active && !seat.ocupado, 'hidden': seat.tipo === 0, 'special': seat.tipo === 2, 'disabled': seat.ocupado, 'apartado': seat.apartado && !seat.active }\">\r\n                      {{seat.tipo !== 0 ? seat.numero <= 9 ? '' + seat.fila  +  seat.numero : '' + seat.fila +  seat.numero  : ''}}\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n            <div class=\"screen-section\">\r\n              <p>pantalla</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </mat-step>\r\n    <!-- END seat selection --> \r\n  </mat-horizontal-stepper>\r\n\r\n  <mat-card>\r\n    <h3>Lista de reservaciones</h3>\r\n    <table mat-table [dataSource]=\"ticketsFound\" class=\"mat-elevation-z8\">\r\n\r\n      <!--- Note that these columns can be defined in any order.\r\n            The actual rendered columns are set as a property on the row definition\" -->\r\n    \r\n      <!-- Nombre Column -->\r\n      <ng-container matColumnDef=\"nombre\">\r\n        <th mat-header-cell *matHeaderCellDef> Nombre </th>\r\n        <td mat-cell *matCellDef=\"let reservacion\"> {{reservacion.nombre}} </td>\r\n      </ng-container>\r\n    \r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"pelicula\">\r\n        <th mat-header-cell *matHeaderCellDef> Pelicula </th>\r\n        <td mat-cell *matCellDef=\"let reservacion\"> {{reservacion.pelicula}} </td>\r\n      </ng-container>\r\n    \r\n      <!-- hora Column -->\r\n      <ng-container matColumnDef=\"hora\">\r\n        <th mat-header-cell *matHeaderCellDef> Hora </th>\r\n        <td mat-cell *matCellDef=\"let reservacion\"> {{reservacion.hora}} </td>\r\n      </ng-container>\r\n    \r\n      <!-- fecha Column -->\r\n      <ng-container matColumnDef=\"fecha\">\r\n        <th mat-header-cell *matHeaderCellDef> Fecha </th>\r\n        <td mat-cell *matCellDef=\"let reservacion\"> {{reservacion.fecha}} </td>\r\n      </ng-container>\r\n\r\n      <!-- fecha Column -->\r\n      <ng-container matColumnDef=\"customColumn\">\r\n        <th mat-header-cell *matHeaderCellDef> NO. asientos </th>\r\n        <td mat-cell *matCellDef=\"let reservacion\"> {{reservacion.asientos.length}} </td>\r\n      </ng-container> \r\n\r\n      <!-- Asientos Column -->\r\n      <ng-container matColumnDef=\"asientos\">\r\n        <th mat-header-cell *matHeaderCellDef> Asientos </th>\r\n        <td mat-cell *matCellDef=\"let reservacion\">\r\n           <span *ngFor=\"let seat of reservacion.asientos\">\r\n            {{seat.nombre}}\r\n          </span>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <!--Actions column-->\r\n      <ng-container matColumnDef=\"actionColunm\">\r\n        <th mat-header-cell *matHeaderCellDef> </th>\r\n        <td mat-cell *matCellDef=\"let reservacion\"> \r\n         <button mat-buton (click)=\"cancelarReservacion(reservacion.id)\">\r\n           X\r\n         </button>  \r\n        </td>\r\n      </ng-container> \r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n  </mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/taquilla/taquilla.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/taquilla/taquilla.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <div class=\"header-container\">\r\n    <!--<h1 class=\"welcome-label\">Bienvenido a la Cinema Plaza San Javier</h1>\r\n    <h5 class=\"user-id\">{{ userName }}</h5>-->\r\n  </div>\r\n\r\n  <mat-card>\r\n      <mat-form-field>\r\n        <mat-label>Fechas</mat-label>\r\n        <mat-select\r\n          [(ngModel)]=\"selectedDate\"\r\n          (ngModelChange)=\"handleDateChange()\">\r\n          <mat-option *ngFor=\"let fecha of fechas\" [value]=\"fecha\">\r\n            {{fecha | date}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"complejo\">\r\n        <mat-label>Complejo</mat-label>\r\n        <mat-select\r\n          [(value)]=\"currentComplejo.value\">\r\n          <mat-option *ngFor=\"let complejo of complejos\" [value]=\"complejo.value\">\r\n            {{complejo.label}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field> \r\n\r\n      <button mat-button [matMenuTriggerFor]=\"menu\" class=\"setting-btn complejo\">Menu</button>\r\n      <mat-menu #menu=\"matMenu\">\r\n        <button\r\n        mat-menu-item\r\n        routerLink=\"/cambio\" class=\"display-block-btn\">Cambio de boleto</button>\r\n        <button\r\n        mat-menu-item\r\n        routerLink=\"/reservaciones\" class=\"display-block-btn\">Reservaciones</button>\r\n        <button\r\n        *ngIf=\"reimpresionAccess\"\r\n        mat-menu-item\r\n        routerLink=\"/reimpresion\" class=\"display-block-btn\">Reimprimir boletos</button>\r\n        <button\r\n        mat-menu-item\r\n        routerLink=\"/reporte\" class=\"display-block-btn\">Reporte</button>\r\n        <button\r\n        mat-menu-item\r\n        (click)=\"handleLogOut()\" class=\"display-block-btn\">Log out</button>\r\n      </mat-menu>\r\n  </mat-card>\r\n\r\n  <mat-horizontal-stepper [linear]=\"true\" #stepper>\r\n    <mat-step [stepControl]=\"1\">\r\n      <ng-template matStepLabel> <span (click)=\"resetDataToDefaultValues()\">Selecciona tu pelicula</span></ng-template>\r\n      <div class=\"peliculas-container\">\r\n        <div\r\n          class=\"pelicula\"\r\n          *ngFor=\"let pelicula of peliculas\">\r\n          <mat-card>\r\n              <img [src]=\"pelicula.cartelUrl\" alt=\"\">\r\n              <mat-card-title>{{pelicula.nombre}}</mat-card-title>\r\n              <div class=\"horarios-container\">\r\n                <div \r\n                  *ngFor=\"let horario of pelicula.horarios\">\r\n                  <div\r\n                    class=\"horario\"\r\n                    (click)=\"handleHorarioSelection(horario, pelicula)\">\r\n                    <h5\r\n                      class=\"hora\"\r\n                      [ngClass]=\"{'active': horario.id === selectedHorario?.id }\">\r\n                      {{horario.hora}}\r\n                    </h5>\r\n                    <h5 class=\"sala\">{{horario.sala.nombre}}</h5>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n      <mat-card *ngIf=\"selectedHorario\">\r\n          <mat-card-title>Boletos: {{totalTickets}} - {{total | currency}}</mat-card-title>\r\n          <div>\r\n            <mat-card\r\n              class=\"precio-container\"\r\n              *ngFor=\"let precio of selectedHorario.precios\">\r\n              <div (click)=\"handleDecreaseButton(precio)\">\r\n                  <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">remove</mat-icon>\r\n              </div>\r\n              <div>\r\n                <h4>{{ precio.nombre }}</h4>\r\n                <h3>{{precio.boletos}}</h3>\r\n                <h5>$ {{ precio.precio }}</h5>\r\n              </div>\r\n              <div (click)=\"handleIncreaseButton(precio)\">\r\n                  <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">add</mat-icon>\r\n              </div>\r\n            </mat-card>\r\n            <div class=\"next-button button-select-seat\" *ngIf=\"totalTickets > 0\">\r\n              <button\r\n                mat-button\r\n                matStepperNext\r\n                (click)=\"handleNextButton()\"><h3>Selecccionar asientos</h3></button>\r\n            </div>\r\n          </div>\r\n      </mat-card>\r\n    </mat-step>\r\n    <mat-step *ngIf=\"totalTickets > 0\" [stepControl]=\"2\">\r\n      <ng-template matStepLabel>Selecciona tus asientos</ng-template>\r\n      <div class=\"asientos-container\">\r\n        <div class=\"movie-card\">\r\n            <mat-card>\r\n              <img [src]=\"selectedMovie.cartelUrl\" alt=\"\">\r\n              <mat-card-title>{{selectedMovie.nombre}}</mat-card-title>\r\n              <div class=\"horarios-container\">\r\n                <div\r\n                  class=\"horario\">\r\n                  <h5\r\n                    class=\"hora\">\r\n                    {{selectedHorario.hora}}\r\n                  </h5>\r\n                  <h5 class=\"sala\">{{selectedHorario.sala.nombre}}</h5>\r\n                </div>\r\n              </div>\r\n          </mat-card>\r\n          <div\r\n            *ngIf=\"this.selectedSeats.length >= this.totalTickets\"\r\n            class=\"print-button-container\">\r\n              <button\r\n              mat-button\r\n              matStepperNext\r\n              (click)=\"handlePrintButton()\"><h3>Imprimir asientos</h3></button>\r\n          </div>\r\n        </div>\r\n        <div class=\"asientos\">\r\n          <h2>{{ totalTickets }} boletos | {{total | currency}}</h2>\r\n          <div class=\"table-window\">\r\n            <div class=\"seats-table-container\">\r\n              <table>\r\n                <tr *ngFor=\"let row of seats\">\r\n                  <td class=\"seat-letter\">{{ row.asientos[0].fila }}</td>\r\n                  <td\r\n                    *ngFor=\"let seat of row.asientos\"\r\n                    (click)=\"handleSeatButton(seat)\"\r\n                    class=\"seat\"\r\n                    [ngClass]=\"{'active': seat.active && !seat.ocupado, 'hidden': seat.tipo === 0, 'special': seat.tipo === 2, 'disabled': seat.ocupado, 'apartado': seat.apartado && !seat.active }\">\r\n                    {{seat.tipo !== 0 ? seat.numero <= 9 ? '' + seat.fila  +  seat.numero : '' + seat.fila +  seat.numero  : ''}}\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"screen-section\">\r\n            <p>pantalla</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-step>\r\n  </mat-horizontal-stepper>  \r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_taquilla_taquilla_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/taquilla/taquilla.component */ "./src/app/taquilla/taquilla.component.ts");
/* harmony import */ var _app_reimpresion_reimpresion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/reimpresion/reimpresion.component */ "./src/app/reimpresion/reimpresion.component.ts");
/* harmony import */ var _app_cambio_cambio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/cambio/cambio.component */ "./src/app/cambio/cambio.component.ts");
/* harmony import */ var _app_reporte_reporte_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/reporte/reporte.component */ "./src/app/reporte/reporte.component.ts");
/* harmony import */ var _app_reservaciones_reservaciones_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/reservaciones/reservaciones.component */ "./src/app/reservaciones/reservaciones.component.ts");
/* harmony import */ var _app_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_cartelera_cartelera_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/cartelera/cartelera.component */ "./src/app/cartelera/cartelera.component.ts");
/* harmony import */ var _app_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.guard */ "./src/app/app.guard.ts");











var routes = [
    {
        path: '',
        component: _app_cartelera_cartelera_component__WEBPACK_IMPORTED_MODULE_9__["CarteleraComponent"]
    },
    {
        path: 'login',
        component: _app_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
    },
    {
        path: 'taquilla',
        component: _app_taquilla_taquilla_component__WEBPACK_IMPORTED_MODULE_3__["TaquillaComponent"],
        canActivate: [_app_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
    },
    {
        path: 'reimpresion',
        component: _app_reimpresion_reimpresion_component__WEBPACK_IMPORTED_MODULE_4__["ReimpresionComponent"],
        canActivate: [_app_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
    },
    {
        path: 'cambio',
        component: _app_cambio_cambio_component__WEBPACK_IMPORTED_MODULE_5__["CambioComponent"],
    },
    {
        path: 'reporte',
        component: _app_reporte_reporte_component__WEBPACK_IMPORTED_MODULE_6__["ReporteComponent"],
    },
    {
        path: 'reservaciones',
        component: _app_reservaciones_reservaciones_component__WEBPACK_IMPORTED_MODULE_7__["ReservacionesComponent"],
    },
    {
        path: '**',
        redirectTo: '',
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(oauthService) {
        this.oauthService = oauthService;
        this.title = 'taquilla';
        this.oauthService.tokenEndpoint = "https://taquilla.plazasanjavier.com/oauth/token";
        this.oauthService.userinfoEndpoint = "https://taquilla.plazasanjavier.com/identity";
        //this.oauthService.tokenEndpoint = "http://taquilla.localhost/oauth/token";
        //this.oauthService.userinfoEndpoint = "http://taquilla.localhost/identity";
        this.oauthService.clientId = "taquillaClient";
        this.oauthService.scope = "openid offline_access";
        this.oauthService.dummyClientSecret = "@4816152342";
        this.oauthService.oidc = false;
        this.oauthService.requireHttps = false;
    }
    AppComponent.ctorParameters = function () { return [
        { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.guard.ts":
/*!******************************!*\
  !*** ./src/app/app.guard.ts ***!
  \******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, oauthService, activatedRoute) {
        this.router = router;
        this.oauthService = oauthService;
        this.activatedRoute = activatedRoute;
        this.authenticated = this.oauthService.hasValidAccessToken();
        this.userAccess = this.oauthService.getIdentityClaims();
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authenticated) {
            var currentRoute_1 = state.url.replace('/', '');
            var allowedRoute = this.userAccess.permisos.some(function (access) { return access.key.includes(currentRoute_1); });
            if (allowedRoute) {
                return true;
            }
            else {
                this.router.navigate(['taquilla']);
                return true;
            }
        }
        this.router.navigate(['/']);
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__["OAuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/angular-material.module */ "./src/app/shared/angular-material.module.ts");
/* harmony import */ var _taquilla_taquilla_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./taquilla/taquilla.component */ "./src/app/taquilla/taquilla.component.ts");
/* harmony import */ var _reimpresion_reimpresion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reimpresion/reimpresion.component */ "./src/app/reimpresion/reimpresion.component.ts");
/* harmony import */ var _cambio_cambio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cambio/cambio.component */ "./src/app/cambio/cambio.component.ts");
/* harmony import */ var _reservaciones_reservaciones_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reservaciones/reservaciones.component */ "./src/app/reservaciones/reservaciones.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _cartelera_cartelera_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cartelera/cartelera.component */ "./src/app/cartelera/cartelera.component.ts");
/* harmony import */ var _reporte_reporte_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reporte/reporte.component */ "./src/app/reporte/reporte.component.ts");
/* harmony import */ var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/peliculas.service */ "./src/app/services/peliculas.service.ts");
/* harmony import */ var _services_salas_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/salas.service */ "./src/app/services/salas.service.ts");
/* harmony import */ var _services_pagos_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/pagos.service */ "./src/app/services/pagos.service.ts");
/* harmony import */ var _services_tickets_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/tickets.service */ "./src/app/services/tickets.service.ts");
/* harmony import */ var _app_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.guard */ "./src/app/app.guard.ts");
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./token.interceptor */ "./src/app/token.interceptor.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _taquilla_taquilla_component__WEBPACK_IMPORTED_MODULE_9__["TaquillaComponent"],
                _reimpresion_reimpresion_component__WEBPACK_IMPORTED_MODULE_10__["ReimpresionComponent"],
                _cambio_cambio_component__WEBPACK_IMPORTED_MODULE_11__["CambioComponent"],
                _reporte_reporte_component__WEBPACK_IMPORTED_MODULE_15__["ReporteComponent"],
                _reservaciones_reservaciones_component__WEBPACK_IMPORTED_MODULE_12__["ReservacionesComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _cartelera_cartelera_component__WEBPACK_IMPORTED_MODULE_14__["CarteleraComponent"],
                _reimpresion_reimpresion_component__WEBPACK_IMPORTED_MODULE_10__["CancelacionModal"],
            ],
            entryComponents: [
                _reimpresion_reimpresion_component__WEBPACK_IMPORTED_MODULE_10__["CancelacionModal"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__["OAuthModule"].forRoot(),
                ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"].forRoot()
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_21__["TokenInterceptor"],
                    multi: true
                },
                _services_peliculas_service__WEBPACK_IMPORTED_MODULE_16__["PeliculasService"],
                _services_salas_service__WEBPACK_IMPORTED_MODULE_17__["SalasService"],
                _services_pagos_service__WEBPACK_IMPORTED_MODULE_18__["PagosService"],
                _services_tickets_service__WEBPACK_IMPORTED_MODULE_19__["TicketsService"],
                _app_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cambio/cambio.component.scss":
/*!**********************************************!*\
  !*** ./src/app/cambio/cambio.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-container {\n  margin-bottom: 25px;\n}\n\n.reimpresion-label {\n  display: inline-block;\n}\n\n.side-menu {\n  float: right;\n}\n\n.side-menu button {\n  color: #FFFFFF;\n  background-color: #3f51b5;\n  min-width: 150px;\n  margin-left: 10px;\n}\n\nmat-form-field {\n  margin-right: 25px;\n}\n\ninput {\n  width: 250px;\n}\n\n.no-tickets {\n  text-align: center;\n}\n\n.search-results {\n  margin-top: 25px;\n}\n\n.tickets-list {\n  text-align: left;\n}\n\n.ticket {\n  display: inline-block;\n  padding: 20px;\n  margin: 10px;\n  min-width: 200px;\n}\n\n.print-button {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n}\n\n.peliculas-title {\n  display: inline-block;\n}\n\n.mat-form-field {\n  width: 250px;\n}\n\n.complejo {\n  margin-right: 25px;\n}\n\n.pelicula {\n  width: 13%;\n  display: inline-block;\n  margin-right: 1%;\n  margin-bottom: 25px;\n  vertical-align: top;\n  min-height: 300px;\n}\n\n.pelicula mat-card {\n  min-height: 415px;\n  text-align: center;\n}\n\n.pelicula img {\n  width: 200px;\n  min-height: 180px;\n  height: auto;\n  margin-bottom: 15px;\n  text-align: center;\n}\n\n.horario {\n  border: 1px solid #E0E0E0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  margin: 0 auto;\n  border-radius: 4px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  cursor: pointer;\n}\n\n.horario h5 {\n  display: inline-block;\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n\n.hora {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.sala {\n  background-color: #a6a6a6;\n  color: white;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.active {\n  background-color: #87d9e5;\n}\n\n.precio-container {\n  width: 200px;\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 10px;\n}\n\n.precio-container div {\n  width: 33%;\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.precio-container div h4 {\n  margin-top: 0;\n}\n\n.next-button {\n  margin: 0 auto;\n  width: 250px;\n  margin-top: 25px;\n}\n\n.next-button button {\n  background-color: #004998;\n  color: white;\n}\n\n.asientos-container {\n  position: relative;\n  width: 100%;\n  height: auto;\n}\n\n.movie-card {\n  width: 19%;\n  vertical-align: top;\n  position: relative;\n  display: inline-block;\n  margin-right: 1%;\n}\n\n.movie-card mat-card {\n  text-align: center;\n}\n\n.movie-card img {\n  width: 100%;\n  min-height: 180px;\n  height: auto;\n  margin-bottom: 15px;\n  text-align: center;\n}\n\n.asientos {\n  width: 80%;\n  height: auto;\n  background-color: #252C36;\n  text-align: center;\n  vertical-align: top;\n  position: relative;\n  display: inline-block;\n  padding-top: 25px;\n  padding-bottom: 25px;\n  border-radius: 2px;\n}\n\n.asientos h2 {\n  color: #FFF;\n  margin-top: 0px;\n}\n\n.asientos .room-name {\n  color: #6A7275;\n}\n\n.asientos .table-window {\n  overflow: scroll;\n}\n\n.asientos .table-window .seats-table-container {\n  width: 94%;\n  height: auto;\n  display: inline-block;\n}\n\n.asientos .table-window .seats-table-container table {\n  width: 100%;\n  height: auto;\n  border-collapse: separate;\n  border-spacing: 5px;\n}\n\n.asientos .table-window .seats-table-container table tr {\n  height: auto;\n}\n\n.asientos .table-window .seats-table-container table tr .seat-letter {\n  color: #FFF;\n}\n\n.asientos .table-window .seats-table-container table tr .seat {\n  width: 3rem;\n  height: 2rem;\n  font-size: 1rem;\n  background-color: #50C878;\n  border-radius: 5px 5px 0px 0px;\n  color: #FFF;\n  cursor: pointer;\n}\n\n.asientos .table-window .seats-table-container table tr td.active {\n  background-color: #ff9e05;\n}\n\n.asientos .table-window .seats-table-container table tr td.hidden {\n  visibility: hidden;\n}\n\n.asientos .table-window .seats-table-container table tr td.special {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.asientos .table-window .seats-table-container table tr td.disabled {\n  background-color: #373f4b !important;\n}\n\n.asientos .table-window .seats-table-container table tr td.apartado {\n  background-color: #384c68;\n}\n\n.asientos .screen-section {\n  width: 90%;\n  height: 20px;\n  margin: 0 auto;\n  background-color: #7497B7;\n  border-radius: 2px;\n  padding-top: 4px;\n}\n\n.asientos .screen-section p {\n  color: #fff;\n  text-transform: uppercase;\n  margin: 0px;\n}\n\n.print-button-container {\n  width: 100%;\n  text-align: center;\n  margin-top: 25px;\n  color: white !important;\n}\n\n.print-button-container button {\n  background-color: #004998;\n  color: white;\n}\n\n.header-container {\n  margin-bottom: 25px;\n}\n\n.welcome-label {\n  display: inline-block;\n}\n\n.side-menu {\n  float: right;\n}\n\n.side-menu button {\n  color: #FFFFFF;\n  background-color: #3f51b5;\n  min-width: 150px;\n  margin-left: 10px;\n}\n\n.user-id {\n  position: absolute;\n  top: 60px;\n}\n\n@media print {\n  #printJS-form {\n    page-break-after: always;\n  }\n}\n\n.button-select-seat {\n  display: inline-block;\n  margin-top: 43px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtYmlvL0M6XFxVc2Vyc1xccm9kc29mdFxcRG9jdW1lbnRzXFxSb2Rzb2Z0XFx3ZWJcXHRhcXVpbGxhL3NyY1xcYXBwXFxjYW1iaW9cXGNhbWJpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FtYmlvL2NhbWJpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxxQkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UscUJBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVFO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDQ047O0FERUk7RUFDRSxjQUFBO0FDQU47O0FER0k7RUFDRSxnQkFBQTtBQ0ROOztBRElJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0ZOOztBRElNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDRlI7O0FESVE7RUFDRSxZQUFBO0FDRlY7O0FESVU7RUFDRSxXQUFBO0FDRlo7O0FES1U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNIWjs7QURNVTtFQUNFLHlCQUFBO0FDSlo7O0FEUVU7RUFDRSxrQkFBQTtBQ05aOztBRFNVO0VBRUUsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FDUlo7O0FEV1U7RUFDRSxvQ0FBQTtBQ1RaOztBRFlVO0VBQ0UseUJBQUE7QUNWWjs7QURnQkk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNkTjs7QURnQk07RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDZFI7O0FEbUJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ2hCSjs7QURtQkU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNoQko7O0FEbUJFO0VBQ0UsbUJBQUE7QUNoQko7O0FEbUJFO0VBQ0UscUJBQUE7QUNoQko7O0FEbUJFO0VBQ0UsWUFBQTtBQ2hCSjs7QURtQkU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDaEJKOztBRG1CRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQ2hCSjs7QURtQkU7RUFDRTtJQUFnQix3QkFBQTtFQ2ZsQjtBQUNGOztBRGlCRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDZkoiLCJmaWxlIjoic3JjL2FwcC9jYW1iaW8vY2FtYmlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLnJlaW1wcmVzaW9uLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLnNpZGUtbWVudSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlLW1lbnUgYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uby10aWNrZXRzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1yZXN1bHRzIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aWNrZXRzLWxpc3Qge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLnRpY2tldCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnByaW50LWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC5wZWxpY3VsYXMtdGl0bGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuICBcclxuICAuY29tcGxlam8ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICBcclxuICAucGVsaWN1bGEge1xyXG4gICAgd2lkdGg6IDEzJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuICBcclxuICAucGVsaWN1bGEgbWF0LWNhcmQge1xyXG4gICAgbWluLWhlaWdodDogNDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5wZWxpY3VsYSBpbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuaG9yYXJpbyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmhvcmFyaW8gaDUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmhvcmEge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNhbGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E2YTZhNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg3ZDllNTtcclxuICB9XHJcbiAgXHJcbiAgLnByZWNpby1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnByZWNpby1jb250YWluZXIgZGl2IHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICBcclxuICAucHJlY2lvLWNvbnRhaW5lciBkaXYgaDQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgLm5leHQtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLm5leHQtYnV0dG9uIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0OTk4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuYXNpZW50b3MtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAubW92aWUtY2FyZCB7XHJcbiAgICB3aWR0aDogMTklO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb3ZpZS1jYXJkIG1hdC1jYXJkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm1vdmllLWNhcmQgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYXNpZW50b3Mge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTJDMzY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBcclxuICAgIGgyIHtcclxuICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5yb29tLW5hbWUge1xyXG4gICAgICBjb2xvcjogIzZBNzI3NTtcclxuICAgIH1cclxuICBcclxuICAgIC50YWJsZS13aW5kb3cge1xyXG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnRhYmxlLXdpbmRvdyAuc2VhdHMtdGFibGUtY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDk0JTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgXHJcbiAgICAgIHRhYmxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgICAgICBib3JkZXItc3BhY2luZzogNXB4O1xyXG4gIFxyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICBcclxuICAgICAgICAgIC5zZWF0LWxldHRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgLnNlYXQge1xyXG4gICAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MEM4Nzg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIHRkLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjllMDU7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICAgICAgICB0ZC5oaWRkZW4ge1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICB0ZC5zcGVjaWFsIHtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9kaXNhYmlsaXR5LWljb24uc3ZnJyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgdGQuZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczZjRiICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGQuYXBhcnRhZG8ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0YzY4O1xyXG4gICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5zY3JlZW4tc2VjdGlvbiB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NDk3Qjc7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICBcclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucHJpbnQtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnByaW50LWJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDQ5OTg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC53ZWxjb21lLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLnNpZGUtbWVudSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlLW1lbnUgYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnVzZXItaWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgcHJpbnQge1xyXG4gICAgI3ByaW50SlMtZm9ybSB7IHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5czsgfVxyXG4gIH1cclxuICBcclxuICAuYnV0dG9uLXNlbGVjdC1zZWF0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDQzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSIsIi5oZWFkZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLnJlaW1wcmVzaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2lkZS1tZW51IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc2lkZS1tZW51IGJ1dHRvbiB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4ubm8tdGlja2V0cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlYXJjaC1yZXN1bHRzIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnRpY2tldHMtbGlzdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50aWNrZXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuLnByaW50LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMTBweDtcbn1cblxuLnBlbGljdWxhcy10aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4uY29tcGxlam8ge1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbi5wZWxpY3VsYSB7XG4gIHdpZHRoOiAxMyU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWluLWhlaWdodDogMzAwcHg7XG59XG5cbi5wZWxpY3VsYSBtYXQtY2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDQxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wZWxpY3VsYSBpbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhvcmFyaW8ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaG9yYXJpbyBoNSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhvcmEge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5zYWxhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2YTZhNjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdkOWU1O1xufVxuXG4ucHJlY2lvLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5wcmVjaW8tY29udGFpbmVyIGRpdiB7XG4gIHdpZHRoOiAzMyU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ucHJlY2lvLWNvbnRhaW5lciBkaXYgaDQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV4dC1idXR0b24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ubmV4dC1idXR0b24gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDk5ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYXNpZW50b3MtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubW92aWUtY2FyZCB7XG4gIHdpZHRoOiAxOSU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDElO1xufVxuXG4ubW92aWUtY2FyZCBtYXQtY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1vdmllLWNhcmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFzaWVudG9zIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyQzM2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5hc2llbnRvcyBoMiB7XG4gIGNvbG9yOiAjRkZGO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4uYXNpZW50b3MgLnJvb20tbmFtZSB7XG4gIGNvbG9yOiAjNkE3Mjc1O1xufVxuLmFzaWVudG9zIC50YWJsZS13aW5kb3cge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLmFzaWVudG9zIC50YWJsZS13aW5kb3cgLnNlYXRzLXRhYmxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA5NCU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmFzaWVudG9zIC50YWJsZS13aW5kb3cgLnNlYXRzLXRhYmxlLWNvbnRhaW5lciB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiA1cHg7XG59XG4uYXNpZW50b3MgLnRhYmxlLXdpbmRvdyAuc2VhdHMtdGFibGUtY29udGFpbmVyIHRhYmxlIHRyIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmFzaWVudG9zIC50YWJsZS13aW5kb3cgLnNlYXRzLXRhYmxlLWNvbnRhaW5lciB0YWJsZSB0ciAuc2VhdC1sZXR0ZXIge1xuICBjb2xvcjogI0ZGRjtcbn1cbi5hc2llbnRvcyAudGFibGUtd2luZG93IC5zZWF0cy10YWJsZS1jb250YWluZXIgdGFibGUgdHIgLnNlYXQge1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MEM4Nzg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcbiAgY29sb3I6ICNGRkY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hc2llbnRvcyAudGFibGUtd2luZG93IC5zZWF0cy10YWJsZS1jb250YWluZXIgdGFibGUgdHIgdGQuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWUwNTtcbn1cbi5hc2llbnRvcyAudGFibGUtd2luZG93IC5zZWF0cy10YWJsZS1jb250YWluZXIgdGFibGUgdHIgdGQuaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmFzaWVudG9zIC50YWJsZS13aW5kb3cgLnNlYXRzLXRhYmxlLWNvbnRhaW5lciB0YWJsZSB0ciB0ZC5zcGVjaWFsIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG4uYXNpZW50b3MgLnRhYmxlLXdpbmRvdyAuc2VhdHMtdGFibGUtY29udGFpbmVyIHRhYmxlIHRyIHRkLmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3M2Y0YiAhaW1wb3J0YW50O1xufVxuLmFzaWVudG9zIC50YWJsZS13aW5kb3cgLnNlYXRzLXRhYmxlLWNvbnRhaW5lciB0YWJsZSB0ciB0ZC5hcGFydGFkbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODRjNjg7XG59XG4uYXNpZW50b3MgLnNjcmVlbi1zZWN0aW9uIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0OTdCNztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuLmFzaWVudG9zIC5zY3JlZW4tc2VjdGlvbiBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ucHJpbnQtYnV0dG9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ucHJpbnQtYnV0dG9uLWNvbnRhaW5lciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0OTk4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLndlbGNvbWUtbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zaWRlLW1lbnUge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zaWRlLW1lbnUgYnV0dG9uIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udXNlci1pZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MHB4O1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICAjcHJpbnRKUy1mb3JtIHtcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhbHdheXM7XG4gIH1cbn1cbi5idXR0b24tc2VsZWN0LXNlYXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDQzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cambio/cambio.component.ts":
/*!********************************************!*\
  !*** ./src/app/cambio/cambio.component.ts ***!
  \********************************************/
/*! exports provided: CambioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CambioComponent", function() { return CambioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cancelar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cancelar.service */ "./src/app/services/cancelar.service.ts");
/* harmony import */ var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/peliculas.service */ "./src/app/services/peliculas.service.ts");
/* harmony import */ var _services_salas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/salas.service */ "./src/app/services/salas.service.ts");
/* harmony import */ var _services_pagos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/pagos.service */ "./src/app/services/pagos.service.ts");
/* harmony import */ var _services_tickets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/tickets.service */ "./src/app/services/tickets.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");










var CambioComponent = /** @class */ (function () {
    function CambioComponent(cancelarService, peliculasService, salasService, pagosService, ticketsService, router, oauthService) {
        this.cancelarService = cancelarService;
        this.peliculasService = peliculasService;
        this.salasService = salasService;
        this.pagosService = pagosService;
        this.ticketsService = ticketsService;
        this.router = router;
        this.oauthService = oauthService;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            codigoBoleto: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
        });
        this.totalTickets = 0;
        this.total = 0;
        this.selectedSeats = [];
        this.selectedPrecios = [];
        this.preciosToPrint = [];
        this.showPrintSection = false;
        this.userName = this.oauthService.getIdentityClaims()['username'];
        this.reimpresionAccess = true;
        // data for taquilla changue ticket
        this.currentDate = new Date().toISOString().split('T')[0];
        this.showSearchResults = false;
    }
    CambioComponent.prototype.ngOnInit = function () {
        this.getFechas();
        this.getPeliculas('');
        console.log("cambio de boletos");
    };
    //Get list of movies
    CambioComponent.prototype.getPeliculas = function (date) {
        var _this = this;
        this.peliculas = [];
        this.peliculasService.getPeliculas(date)
            .subscribe(function (response) {
            console.log(response);
            _this.peliculas = response;
        }, function (error) {
            console.log(error);
        });
    };
    // Reset cambio
    CambioComponent.prototype.resetDataCambio = function () {
        this.selectedHorario = null;
        this.totalTickets = 0;
        this.total = 0;
        this.selectedMovie = null;
        this.seats = [];
        this.selectedSeats = [];
        this.selectedPrecios = [];
        this.preciosToPrint = [];
        console.log('Reset values');
    };
    CambioComponent.prototype.handleHorarioSelection = function (horario, pelicula) {
        this.resetDataCambio();
        this.selectedHorario = horario;
        this.selectedMovie = pelicula;
        this.selectedHorario.precios.map(function (precio) { return precio.boletos = 0; });
        console.log("selected time");
    };
    CambioComponent.prototype.handleDecreaseButton = function (precio) {
        if (this.totalTickets <= 0 || precio.boletos <= 0) {
            return;
        }
        this.totalTickets--;
        precio.boletos--;
        this.total -= Number(precio.precio);
        this.removePrecio(precio.id);
    };
    CambioComponent.prototype.handleIncreaseButton = function (precio) {
        if (this.total < 1) {
            this.totalTickets++;
            precio.boletos++;
            this.total += Number(precio.precio);
            this.addPrecio(precio.id);
        }
    };
    CambioComponent.prototype.addPrecio = function (id) {
        this.selectedPrecios.push(id);
        for (var i = 0; i < this.selectedHorario.precios.length; i++) {
            if (this.selectedHorario.precios[i].id == id) {
                this.preciosToPrint.push(this.selectedHorario.precios[i]);
                break;
            }
        }
        console.log(this.preciosToPrint);
    };
    CambioComponent.prototype.removePrecio = function (id) {
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
    };
    CambioComponent.prototype.handleNextButton = function () {
        this.getRoomData();
    };
    CambioComponent.prototype.getRoomData = function () {
        var _this = this;
        var salaId = this.selectedHorario.id;
        this.salasService.getSalaById(salaId)
            .subscribe(function (response) {
            _this.seats = response['distribucion'];
        }, function (error) {
            console.log(error);
        });
    };
    CambioComponent.prototype.handleSeatButton = function (seat) {
        if (seat.tipo == 0 || seat.ocupado === true) {
            return;
        }
        if (seat.active && seat.active === true) {
            seat.active = false;
            this.removeSeat(seat);
        }
        else if (this.selectedSeats.length >= this.totalTickets) {
            console.log('limite alcanzado');
            return;
        }
        else {
            seat.active = true;
            this.addSeat(seat);
        }
    };
    CambioComponent.prototype.addSeat = function (seat) {
        this.selectedSeats.push(seat);
    };
    CambioComponent.prototype.removeSeat = function (seat) {
        var _this = this;
        this.selectedSeats.forEach(function (currentSeat, index) {
            if (currentSeat.id === seat.id) {
                _this.selectedSeats.splice(index, 1);
            }
        });
    };
    CambioComponent.prototype.handlePrintButton = function () {
        //this.cancelarBoleto();
    };
    /*private cancelarBoleto() {
      let deleteAll = this.seatCount <= 1 ? 1:0;
      this.cancelarService.cancelTicket(this.seatToChage.id_relacion_boleto, deleteAll)
      .subscribe((response: any) => {
        this.payTickets();
      }, error => {
        console.log(error);
        return false;
      });
    }*/
    CambioComponent.prototype.handleCambioButtonCode = function (seat, seatCount) {
        this.seatToChage = seat;
        this.seatCount = seatCount;
        console.log(seat, seatCount);
    };
    CambioComponent.prototype.payTickets = function () {
        var _this = this;
        var horarioId = this.selectedHorario.id;
        var paymentData = {
            type: "taquilla",
            asientos: [],
            precios: this.selectedPrecios
        };
        this.selectedSeats.forEach(function (seat) { return paymentData.asientos.push(seat.id); });
        this.pagosService.payTickets(horarioId, paymentData)
            .subscribe(function (response) {
            _this.printTickets(response.id);
        }, function (error) {
            console.log(error);
        });
    };
    CambioComponent.prototype.getFechas = function () {
        var _this = this;
        this.peliculasService.getFechas()
            .subscribe(function (response) {
            console.log(response);
            _this.fechas = response;
            _this.selectedDate = _this.fechas[0];
        }, function (error) {
            console.log(error);
        });
    };
    CambioComponent.prototype.handleDateChange = function () {
        console.log(this.selectedDate);
        this.resetDataCambio();
        this.getPeliculas(this.selectedDate);
    };
    CambioComponent.prototype.printTickets = function (id) {
        var printData = {
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
        this.selectedSeats.forEach(function (seat) { return printData.seat.push(seat.nombre); });
        this.resetDataCambio();
        this.ticketsService.printTickets(printData)
            .subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
        this.resetDataCambio();
        // let printButton = document.getElementById('imprimir');
        // printButton.click();
    };
    CambioComponent.prototype.parseDate = function (date) {
        var newdate = new Date(date).toISOString();
        //let dia =  newdate.toLocaleString("es", { weekday: 'long' });
        //let diaNumber =  newdate.toLocaleString("es", { day: "numeric" });
        //let month =  newdate.toLocaleString("es", { month: "long" });
        //let year = newdate.toLocaleString("es", { year: "numeric"});
        //let newDformat =  dia.charAt(0).toUpperCase() + dia.slice(1) + " " + diaNumber + " " +  month.charAt(0).toUpperCase() + month.slice(1) + " " + year;
        return newdate;
    };
    //end ticket buy
    CambioComponent.prototype.handleSearchEvent = function () {
        if (this.searchForm.valid) {
            console.log('handleSearchEvent valid form');
            this.getTickets();
        }
    };
    CambioComponent.prototype.getTickets = function () {
        var _this = this;
        this.ticketsService.getByCodigo(this.searchForm.value.codigoBoleto)
            .subscribe(function (getTicketsResponse) {
            console.log('getTicketsResponse', getTicketsResponse);
            _this.showSearchResults = true;
            if (getTicketsResponse.length > 0) {
                _this.ticketsFound = getTicketsResponse;
            }
            else {
                _this.ticketsFound = null;
            }
        }, function (error) {
            console.log('getTicketsResponse error', error);
        });
    };
    CambioComponent.prototype.handleResetButton = function () {
        this.ticketsFound = [];
        this.showSearchResults = false;
        this.searchForm.reset();
    };
    CambioComponent.ctorParameters = function () { return [
        { type: _services_cancelar_service__WEBPACK_IMPORTED_MODULE_2__["CancelarService"] },
        { type: _services_peliculas_service__WEBPACK_IMPORTED_MODULE_3__["PeliculasService"] },
        { type: _services_salas_service__WEBPACK_IMPORTED_MODULE_4__["SalasService"] },
        { type: _services_pagos_service__WEBPACK_IMPORTED_MODULE_5__["PagosService"] },
        { type: _services_tickets_service__WEBPACK_IMPORTED_MODULE_6__["TicketsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_9__["OAuthService"] }
    ]; };
    CambioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cambio',
            template: __webpack_require__(/*! raw-loader!./cambio.component.html */ "./node_modules/raw-loader/index.js!./src/app/cambio/cambio.component.html"),
            styles: [__webpack_require__(/*! ./cambio.component.scss */ "./src/app/cambio/cambio.component.scss")]
        })
    ], CambioComponent);
    return CambioComponent;
}());



/***/ }),

/***/ "./src/app/cartelera/cartelera.component.scss":
/*!****************************************************!*\
  !*** ./src/app/cartelera/cartelera.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".peliculas-title {\n  font-size: 1rem;\n  display: inline-block;\n}\n\n.mat-form-field {\n  width: 250px;\n}\n\n.complejo {\n  margin-right: 25px;\n}\n\n.pelicula {\n  display: inline-block;\n  margin-right: 1%;\n  margin-bottom: 25px;\n  vertical-align: top;\n  min-height: 300px;\n}\n\n.pelicula mat-card {\n  min-height: 415px;\n  text-align: center;\n}\n\n.pelicula img {\n  width: 200px;\n  min-height: 180px;\n  height: auto;\n  margin-bottom: 15px;\n  text-align: center;\n}\n\n.horario {\n  border: 1px solid #E0E0E0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  margin: 0 auto;\n  border-radius: 4px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  cursor: pointer;\n}\n\n.horario h5 {\n  display: inline-block;\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n\n.hora {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.sala {\n  background-color: #a6a6a6;\n  color: white;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.movie-card {\n  width: 19%;\n  vertical-align: top;\n  position: relative;\n  display: inline-block;\n  margin-right: 1%;\n}\n\n.movie-card mat-card {\n  text-align: center;\n}\n\n.movie-card img {\n  width: 100%;\n  min-height: 180px;\n  height: auto;\n  margin-bottom: 15px;\n  text-align: center;\n}\n\n.header-container {\n  margin-bottom: 25px;\n}\n\n.welcome-label {\n  display: inline-block;\n  font-size: 1.5rem;\n}\n\n.side-menu {\n  float: right;\n}\n\n.side-menu button {\n  color: #FFFFFF;\n  background-color: #3f51b5;\n  min-width: 150px;\n  margin-left: 10px;\n}\n\n.margin-bottom {\n  margin-bottom: 30px;\n}\n\n.peliculas-container {\n  margin-top: 20px;\n}\n\n.prelicula-nombre {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydGVsZXJhL0M6XFxVc2Vyc1xccm9kc29mdFxcRG9jdW1lbnRzXFxSb2Rzb2Z0XFx3ZWJcXHRhcXVpbGxhL3NyY1xcYXBwXFxjYXJ0ZWxlcmFcXGNhcnRlbGVyYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FydGVsZXJhL2NhcnRlbGVyYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREdFO0VBQ0UsWUFBQTtBQ0FKOztBREdFO0VBQ0Usa0JBQUE7QUNBSjs7QURHRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURHRTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0FDQUo7O0FER0U7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdFO0VBQ0UsbUJBQUE7QUNBSjs7QURHRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHRTtFQUNFLFlBQUE7QUNBSjs7QURHRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHRTtFQUNJLG1CQUFBO0FDQU47O0FER0U7RUFDRSxnQkFBQTtBQ0FKOztBREdFO0VBQ0UsZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY2FydGVsZXJhL2NhcnRlbGVyYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZWxpY3VsYXMtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxcmVtOyAgXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb21wbGVqbyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wZWxpY3VsYSB7ICAgIFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wZWxpY3VsYSBtYXQtY2FyZCB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnBlbGljdWxhIGltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxODBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3JhcmlvIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTA7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuaG9yYXJpbyBoNSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuaG9yYSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2FsYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZhNmE2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1vdmllLWNhcmQge1xyXG4gICAgd2lkdGg6IDE5JTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gIH1cclxuICBcclxuICAubW92aWUtY2FyZCBtYXQtY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb3ZpZS1jYXJkIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLndlbGNvbWUtbGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlLW1lbnUge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAuc2lkZS1tZW51IGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXJnaW4tYm90dG9tIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcblxyXG4gIC5wZWxpY3VsYXMtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAucHJlbGljdWxhLW5vbWJyZSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfSIsIi5wZWxpY3VsYXMtdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4uY29tcGxlam8ge1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbi5wZWxpY3VsYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWluLWhlaWdodDogMzAwcHg7XG59XG5cbi5wZWxpY3VsYSBtYXQtY2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDQxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wZWxpY3VsYSBpbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhvcmFyaW8ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaG9yYXJpbyBoNSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhvcmEge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5zYWxhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2YTZhNjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5tb3ZpZS1jYXJkIHtcbiAgd2lkdGg6IDE5JTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMSU7XG59XG5cbi5tb3ZpZS1jYXJkIG1hdC1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW92aWUtY2FyZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTgwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi53ZWxjb21lLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnNpZGUtbWVudSB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnNpZGUtbWVudSBidXR0b24ge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5tYXJnaW4tYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnBlbGljdWxhcy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucHJlbGljdWxhLW5vbWJyZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cartelera/cartelera.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cartelera/cartelera.component.ts ***!
  \**************************************************/
/*! exports provided: CarteleraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarteleraComponent", function() { return CarteleraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/peliculas.service */ "./src/app/services/peliculas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CarteleraComponent = /** @class */ (function () {
    function CarteleraComponent(peliculasService, router) {
        this.peliculasService = peliculasService;
        this.router = router;
        this.complejos = [
            {
                label: 'Plaza San Javier',
                value: 'san_javier'
            }
        ];
        this.currentComplejo = this.complejos[0];
    }
    CarteleraComponent.prototype.ngOnInit = function () {
        this.getPeliculas('');
        this.getFechas();
    };
    CarteleraComponent.prototype.getPeliculas = function (date) {
        var _this = this;
        this.peliculas = [];
        this.peliculasService.getPeliculas(date)
            .subscribe(function (response) {
            console.log(response);
            _this.peliculas = response;
        }, function (error) {
            console.log(error);
        });
    };
    CarteleraComponent.prototype.getFechas = function () {
        var _this = this;
        this.peliculasService.getFechas()
            .subscribe(function (response) {
            console.log(response);
            _this.fechas = response;
            _this.selectedDate = _this.fechas[0];
        }, function (error) {
            console.log(error);
        });
    };
    CarteleraComponent.prototype.handleDateChange = function () {
        console.log(this.selectedDate);
        this.resetDataToDefaultValues();
        this.getPeliculas(this.selectedDate);
    };
    CarteleraComponent.prototype.resetDataToDefaultValues = function () {
        this.selectedHorario = null;
    };
    CarteleraComponent.prototype.handleHorarioSelection = function (horario, pelicula) {
        console.log(horario);
        this.resetDataToDefaultValues();
        this.selectedHorario = horario;
    };
    CarteleraComponent.ctorParameters = function () { return [
        { type: _services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__["PeliculasService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CarteleraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cartelera',
            template: __webpack_require__(/*! raw-loader!./cartelera.component.html */ "./node_modules/raw-loader/index.js!./src/app/cartelera/cartelera.component.html"),
            styles: [__webpack_require__(/*! ./cartelera.component.scss */ "./src/app/cartelera/cartelera.component.scss")]
        })
    ], CarteleraComponent);
    return CarteleraComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 100px 0px;\n}\n\n.mat-form-field {\n  width: 100%;\n  min-width: 300px;\n}\n\nmat-card-title,\nmat-card-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.loginError {\n  padding: 16px;\n  width: 268px;\n  color: white;\n  background-color: red;\n  text-align: center;\n}\n\n.button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxyb2Rzb2Z0XFxEb2N1bWVudHNcXFJvZHNvZnRcXHdlYlxcdGFxdWlsbGEvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREFBOztFQUVFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNHRjs7QURBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMDBweCAwcHg7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcbm1hdC1jYXJkLXRpdGxlLFxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW5FcnJvciB7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB3aWR0aDogMjY4cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDEwMHB4IDBweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbm1hdC1jYXJkLXRpdGxlLFxubWF0LWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9naW5FcnJvciB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHdpZHRoOiAyNjhweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(oauthService, router) {
        this.oauthService = oauthService;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
        this.error = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.handleSubmitEvent = function () {
        var _this = this;
        if (this.form.valid) {
            console.log(this.form);
            this.error = false;
            this.errorMessage = '';
            this.oauthService.fetchTokenUsingPasswordFlow(this.form.value.username, this.form.value.password)
                .then(function (resp) {
                console.log(resp);
                // Loading data about the user
                return _this.oauthService.loadUserProfile();
            }).then(function (response) {
                _this.router.navigate(['/taquilla']);
            })
                .catch(function (err) {
                console.log('err =>', err);
                _this.handleLoginError(err.status);
            });
        }
    };
    LoginComponent.prototype.handleLoginError = function (error) {
        switch (error) {
            case 400:
            case 401:
            case 404:
                this.error = true;
                this.errorMessage = 'Usuario o contraseña invalidos';
                break;
            default:
                break;
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/reimpresion/reimpresion.component.scss":
/*!********************************************************!*\
  !*** ./src/app/reimpresion/reimpresion.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-container {\n  margin-bottom: 25px;\n}\n\n.reimpresion-label {\n  display: inline-block;\n}\n\n.side-menu {\n  float: right;\n}\n\n.side-menu button {\n  color: #FFFFFF;\n  background-color: #3f51b5;\n  min-width: 150px;\n  margin-left: 10px;\n}\n\nmat-form-field {\n  margin-right: 25px;\n}\n\ninput {\n  width: 250px;\n}\n\n.no-tickets {\n  text-align: center;\n}\n\n.search-results {\n  margin-top: 25px;\n}\n\n.tickets-list {\n  text-align: left;\n}\n\n.ticket {\n  display: inline-block;\n  padding: 20px;\n  margin: 10px;\n  min-width: 200px;\n}\n\n.print-button {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVpbXByZXNpb24vQzpcXFVzZXJzXFxyb2Rzb2Z0XFxEb2N1bWVudHNcXFJvZHNvZnRcXHdlYlxcdGFxdWlsbGEvc3JjXFxhcHBcXHJlaW1wcmVzaW9uXFxyZWltcHJlc2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVpbXByZXNpb24vcmVpbXByZXNpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3JlaW1wcmVzaW9uL3JlaW1wcmVzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250YWluZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5yZWltcHJlc2lvbi1sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc2lkZS1tZW51IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5zaWRlLW1lbnUgYnV0dG9uIHtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi5uby10aWNrZXRzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cyB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLnRpY2tldHMtbGlzdCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnRpY2tldCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5wcmludC1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuIiwiLmhlYWRlci1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4ucmVpbXByZXNpb24tbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zaWRlLW1lbnUge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zaWRlLW1lbnUgYnV0dG9uIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5uby10aWNrZXRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VhcmNoLXJlc3VsdHMge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udGlja2V0cy1saXN0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRpY2tldCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4ucHJpbnQtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/reimpresion/reimpresion.component.ts":
/*!******************************************************!*\
  !*** ./src/app/reimpresion/reimpresion.component.ts ***!
  \******************************************************/
/*! exports provided: ReimpresionComponent, CancelacionModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReimpresionComponent", function() { return ReimpresionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelacionModal", function() { return CancelacionModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_tickets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tickets.service */ "./src/app/services/tickets.service.ts");
/* harmony import */ var _services_cancelar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cancelar.service */ "./src/app/services/cancelar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");









var ReimpresionComponent = /** @class */ (function () {
    function ReimpresionComponent(ticketsService, cancelarService, router, oauthService, dialog, toastr) {
        this.ticketsService = ticketsService;
        this.cancelarService = cancelarService;
        this.router = router;
        this.oauthService = oauthService;
        this.dialog = dialog;
        this.toastr = toastr;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            codigoBoleto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.currentDate = new Date().toISOString().split('T')[0];
        this.showSearchResults = false;
        this.showPrintSection = false;
        this.userName = this.oauthService.getIdentityClaims()['username'];
    }
    ReimpresionComponent.prototype.ngOnInit = function () {
        this.getCurrentUserTickets();
    };
    ReimpresionComponent.prototype.getCurrentUserTickets = function () {
        var _this = this;
        console.log('getCurrentUserTickets method');
        this.ticketsService.getCurrentUserTickets()
            .subscribe(function (response) {
            console.log('getCurrentUserTickets success', response);
            _this.userTickets = response;
        }, function (error) {
            console.log('getCurrentUserTickets success', error);
        });
    };
    ReimpresionComponent.prototype.handleSearchEvent = function () {
        if (this.searchForm.valid) {
            console.log('handleSearchEvent valid form');
            this.getTickets();
        }
    };
    ReimpresionComponent.prototype.getTickets = function () {
        var _this = this;
        this.ticketsService.getByCodigo(this.searchForm.value.codigoBoleto)
            .subscribe(function (getTicketsResponse) {
            console.log('getTicketsResponse', getTicketsResponse);
            _this.showSearchResults = true;
            if (getTicketsResponse.length > 0) {
                _this.ticketsFound = getTicketsResponse;
            }
            else {
                _this.ticketsFound = null;
            }
        }, function (error) {
            console.log('getTicketsResponse error', error);
        });
    };
    ReimpresionComponent.prototype.handlePrintButton = function (ticketData, seat) {
        var _this = this;
        var printData = {
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
            .subscribe(function (response) {
            console.log(response);
        }, function (error) {
            _this.toastr.warningToastr(error.error.message);
            console.log(error);
        });
        this.ticketsService.printTickets(printData)
            .subscribe(function (response) {
            console.log(response);
            _this.getTickets();
        }, function (error) {
            console.log(error);
        });
    };
    ReimpresionComponent.prototype.handleCancelarButton = function (seat, seatCount, user, password, motivo) {
        var _this = this;
        var deleteAll = seatCount <= 1 ? 1 : 0;
        this.cancelarService.cancelTicket(seat.id_relacion_boleto, deleteAll, user, password, motivo)
            .subscribe(function (response) {
            _this.toastr.successToastr('Boleto cancelado!');
            _this.getCurrentUserTickets();
        }, function (error) {
            _this.toastr.errorToastr(error.error.message);
        });
    };
    ReimpresionComponent.prototype.handleCancelarButtonCode = function (seat, seatCount, user, password, motivo) {
        var _this = this;
        var deleteAll = seatCount <= 1 ? 1 : 0;
        this.cancelarService.cancelTicket(seat.id_relacion_boleto, deleteAll, user, password, motivo)
            .subscribe(function (response) {
            console.log(response);
            _this.getTickets();
        }, function (error) {
            console.log(error);
        });
    };
    ReimpresionComponent.prototype.handleResetButton = function () {
        this.ticketsFound = [];
        this.showSearchResults = false;
        this.searchForm.reset();
    };
    ReimpresionComponent.prototype.parseDate = function (date) {
        var newdate = new Date(date.replace(/-/g, '\/'));
        var dia = newdate.toLocaleString("es", { weekday: 'long' });
        var diaNumber = newdate.toLocaleString("es", { day: "numeric" });
        var month = newdate.toLocaleString("es", { month: "long" });
        var year = newdate.toLocaleString("es", { year: "numeric" });
        var newDformat = dia.charAt(0).toUpperCase() + dia.slice(1) + " " + diaNumber + " " + month.charAt(0).toUpperCase() + month.slice(1) + " " + year;
        return newDformat;
    };
    ReimpresionComponent.prototype.openDialog = function (seat, seatCount, byCode) {
        var _this = this;
        if (byCode === void 0) { byCode = false; }
        var dialogRef = this.dialog.open(CancelacionModal, {
            width: '260px',
            data: {
                user: this.user,
                password: this.password,
                motivo: this.motivo,
                seat: seat,
                seatCount: seatCount
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (byCode) {
                _this.handleCancelarButtonCode(result.seat, result.seatCount, result.user, result.password, result.motivo);
            }
            else {
                _this.handleCancelarButton(result.seat, result.seatCount, result.user, result.password, result.motivo);
            }
        });
    };
    ReimpresionComponent.ctorParameters = function () { return [
        { type: _services_tickets_service__WEBPACK_IMPORTED_MODULE_3__["TicketsService"] },
        { type: _services_cancelar_service__WEBPACK_IMPORTED_MODULE_4__["CancelarService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrManager"] }
    ]; };
    ReimpresionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reimpresion',
            template: __webpack_require__(/*! raw-loader!./reimpresion.component.html */ "./node_modules/raw-loader/index.js!./src/app/reimpresion/reimpresion.component.html"),
            styles: [__webpack_require__(/*! ./reimpresion.component.scss */ "./src/app/reimpresion/reimpresion.component.scss")]
        })
    ], ReimpresionComponent);
    return ReimpresionComponent;
}());

var CancelacionModal = /** @class */ (function () {
    function CancelacionModal(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CancelacionModal.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CancelacionModal.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"],] }] }
    ]; };
    CancelacionModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cancelacion-modal',
            template: __webpack_require__(/*! raw-loader!./cancelacion-modal.html */ "./node_modules/raw-loader/index.js!./src/app/reimpresion/cancelacion-modal.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"]))
    ], CancelacionModal);
    return CancelacionModal;
}());



/***/ }),

/***/ "./src/app/reporte/reporte.component.scss":
/*!************************************************!*\
  !*** ./src/app/reporte/reporte.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-container {\n  margin-bottom: 25px;\n}\n\n.reimpresion-label {\n  display: inline-block;\n}\n\n.side-menu {\n  float: right;\n}\n\n.side-menu button {\n  color: #FFFFFF;\n  background-color: #3f51b5;\n  min-width: 150px;\n  margin-left: 10px;\n}\n\nmat-form-field {\n  margin-right: 25px;\n}\n\ninput {\n  width: 250px;\n}\n\n.no-tickets {\n  text-align: center;\n}\n\n.search-results {\n  margin-top: 25px;\n}\n\n.mat-form-field {\n  width: 250px;\n}\n\n.header-container {\n  margin-bottom: 25px;\n}\n\n.welcome-label {\n  display: inline-block;\n}\n\n.side-menu {\n  float: right;\n}\n\n.side-menu button {\n  color: #FFFFFF;\n  background-color: #3f51b5;\n  min-width: 150px;\n  margin-left: 10px;\n}\n\ntable {\n  font-size: 20px;\n  text-align: center;\n  border-collapse: collapse;\n}\n\ntable td {\n  padding: 10px;\n  font-size: 16px;\n}\n\ntable tbody:nth-child(even) {\n  background-color: #f0f1ff;\n}\n\ntable tbody:nth-child(odd) {\n  background-color: #F9FCFF;\n}\n\ntable .totales {\n  background-color: aquamarine;\n  font-weight: bold;\n}\n\ntable .totales-funcion {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0ZS9DOlxcVXNlcnNcXHJvZHNvZnRcXERvY3VtZW50c1xcUm9kc29mdFxcd2ViXFx0YXF1aWxsYS9zcmNcXGFwcFxccmVwb3J0ZVxccmVwb3J0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVwb3J0ZS9yZXBvcnRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURFRTtFQUNFLHFCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxZQUFBO0FDRUo7O0FEQ0U7RUFDRSxtQkFBQTtBQ0VKOztBRENFO0VBQ0UscUJBQUE7QUNFSjs7QURDRTtFQUNFLFlBQUE7QUNFSjs7QURDRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURDRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDRUo7O0FEREk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0dOOztBREFJO0VBQ0UseUJBQUE7QUNFTjs7QURDSTtFQUNFLHlCQUFBO0FDQ047O0FERUk7RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0FDQU47O0FERUk7RUFDRSxpQkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0ZS9yZXBvcnRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLnJlaW1wcmVzaW9uLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLnNpZGUtbWVudSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlLW1lbnUgYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uby10aWNrZXRzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1yZXN1bHRzIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgfVxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC53ZWxjb21lLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLnNpZGUtbWVudSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlLW1lbnUgYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHRkIHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRib2R5Om50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYxZmY7XHJcbiAgICB9XHJcblxyXG4gICAgdGJvZHk6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGQ0ZGO1xyXG4gICAgfVxyXG5cclxuICAgIC50b3RhbGVzIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAudG90YWxlcy1mdW5jaW9uIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gIH0iLCIuaGVhZGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5yZWltcHJlc2lvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNpZGUtbWVudSB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnNpZGUtbWVudSBidXR0b24ge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLm5vLXRpY2tldHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWFyY2gtcmVzdWx0cyB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4ud2VsY29tZS1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNpZGUtbWVudSB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnNpZGUtbWVudSBidXR0b24ge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbnRhYmxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG50YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbnRhYmxlIHRib2R5Om50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYxZmY7XG59XG50YWJsZSB0Ym9keTpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUZDRkY7XG59XG50YWJsZSAudG90YWxlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxudGFibGUgLnRvdGFsZXMtZnVuY2lvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/reporte/reporte.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reporte/reporte.component.ts ***!
  \**********************************************/
/*! exports provided: ReporteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteComponent", function() { return ReporteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reporte_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/reporte.service */ "./src/app/services/reporte.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");





var ReporteComponent = /** @class */ (function () {
    function ReporteComponent(reporteService, router, oauthService) {
        this.reporteService = reporteService;
        this.router = router;
        this.oauthService = oauthService;
    }
    ReporteComponent.prototype.ngOnInit = function () {
        this.currentDate = this.formatDate(Date());
        this.getReporte();
    };
    ReporteComponent.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    ReporteComponent.prototype.getReporte = function () {
        var _this = this;
        var userData = this.oauthService.getIdentityClaims();
        this.reporteService.getReport(this.currentDate, userData.username)
            .subscribe(function (response) {
            _this.reportData = _this.parseResponse(response);
        }, function (error) {
            console.log('Get report Fail', error);
        });
    };
    ReporteComponent.prototype.parseResponse = function (response) {
        var entradas = 0;
        var total = 0;
        response.forEach(function (element) {
            element.funciones.forEach(function (func) {
                entradas += parseInt(func.entradas.split(',').join(''));
                total += parseInt(func.total.split(',').join(''));
            });
            element.funciones.push({ "entradas": entradas, "total": total });
            entradas = 0;
            total = 0;
        });
        return response;
    };
    ReporteComponent.prototype.updateReport = function (event) {
        var d = event.value, month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        var selectedDate = [year, month, day].join('-');
        this.currentDate = selectedDate;
        this.getReporte();
    };
    ReporteComponent.ctorParameters = function () { return [
        { type: _services_reporte_service__WEBPACK_IMPORTED_MODULE_2__["ReporteService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__["OAuthService"] }
    ]; };
    ReporteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reporte',
            template: __webpack_require__(/*! raw-loader!./reporte.component.html */ "./node_modules/raw-loader/index.js!./src/app/reporte/reporte.component.html"),
            styles: [__webpack_require__(/*! ./reporte.component.scss */ "./src/app/reporte/reporte.component.scss")]
        })
    ], ReporteComponent);
    return ReporteComponent;
}());



/***/ }),

/***/ "./src/app/reservaciones/reservaciones.component.scss":
/*!************************************************************!*\
  !*** ./src/app/reservaciones/reservaciones.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-container {\n  margin-bottom: 25px;\n}\n\n.reimpresion-label {\n  display: inline-block;\n}\n\n.side-menu {\n  float: right;\n}\n\n.side-menu button {\n  color: #FFFFFF;\n  background-color: #3f51b5;\n  min-width: 150px;\n  margin-left: 10px;\n}\n\nmat-form-field {\n  margin-right: 25px;\n}\n\ninput {\n  width: 250px;\n}\n\n.no-tickets {\n  text-align: center;\n}\n\n.search-results {\n  margin-top: 25px;\n}\n\n.tickets-list {\n  text-align: left;\n}\n\n.ticket {\n  display: inline-block;\n  padding: 20px;\n  margin: 10px;\n  min-width: 200px;\n}\n\n.print-button {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n}\n\n.peliculas-title {\n  display: inline-block;\n}\n\n.mat-form-field {\n  width: 250px;\n}\n\n.complejo {\n  margin-right: 25px;\n}\n\n.pelicula {\n  width: 13%;\n  display: inline-block;\n  margin-right: 1%;\n  margin-bottom: 25px;\n  vertical-align: top;\n  min-height: 300px;\n}\n\n.pelicula mat-card {\n  min-height: 415px;\n  text-align: center;\n}\n\n.pelicula img {\n  width: 200px;\n  min-height: 180px;\n  height: auto;\n  margin-bottom: 15px;\n  text-align: center;\n}\n\n.horario {\n  border: 1px solid #E0E0E0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  margin: 0 auto;\n  border-radius: 4px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  cursor: pointer;\n}\n\n.horario h5 {\n  display: inline-block;\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n\n.hora {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.sala {\n  background-color: #a6a6a6;\n  color: white;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.active {\n  background-color: #87d9e5;\n}\n\n.precio-container {\n  width: 200px;\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 10px;\n}\n\n.precio-container div {\n  width: 33%;\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.precio-container div h4 {\n  margin-top: 0;\n}\n\n.next-button {\n  margin: 0 auto;\n  width: 250px;\n  margin-top: 25px;\n}\n\n.next-button button {\n  background-color: #004998;\n  color: white;\n}\n\n.asientos-container {\n  position: relative;\n  width: 100%;\n  height: auto;\n}\n\n.movie-card {\n  width: 19%;\n  vertical-align: top;\n  position: relative;\n  display: inline-block;\n  margin-right: 1%;\n}\n\n.movie-card mat-card {\n  text-align: center;\n}\n\n.movie-card img {\n  width: 100%;\n  min-height: 180px;\n  height: auto;\n  margin-bottom: 15px;\n  text-align: center;\n}\n\n.asientos {\n  width: 80%;\n  height: auto;\n  background-color: #252C36;\n  text-align: center;\n  vertical-align: top;\n  position: relative;\n  display: inline-block;\n  padding-top: 25px;\n  padding-bottom: 25px;\n  border-radius: 2px;\n}\n\n.asientos h2 {\n  color: #FFF;\n  margin-top: 0px;\n}\n\n.asientos .room-name {\n  color: #6A7275;\n}\n\n.asientos .table-window {\n  overflow: scroll;\n}\n\n.asientos .table-window .seats-table-container {\n  width: 94%;\n  height: auto;\n  display: inline-block;\n}\n\n.asientos .table-window .seats-table-container table {\n  width: 100%;\n  height: auto;\n  border-collapse: separate;\n  border-spacing: 5px;\n}\n\n.asientos .table-window .seats-table-container table tr {\n  height: auto;\n}\n\n.asientos .table-window .seats-table-container table tr .seat-letter {\n  color: #FFF;\n}\n\n.asientos .table-window .seats-table-container table tr .seat {\n  width: 3rem;\n  height: 2rem;\n  font-size: 1rem;\n  background-color: #50C878;\n  border-radius: 5px 5px 0px 0px;\n  color: #FFF;\n  cursor: pointer;\n}\n\n.asientos .table-window .seats-table-container table tr td.active {\n  background-color: #ff9e05;\n}\n\n.asientos .table-window .seats-table-container table tr td.hidden {\n  visibility: hidden;\n}\n\n.asientos .table-window .seats-table-container table tr td.special {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.asientos .table-window .seats-table-container table tr td.disabled {\n  background-color: #373f4b !important;\n}\n\n.asientos .table-window .seats-table-container table tr td.apartado {\n  background-color: #384c68;\n}\n\n.asientos .screen-section {\n  width: 90%;\n  height: 20px;\n  margin: 0 auto;\n  background-color: #7497B7;\n  border-radius: 2px;\n  padding-top: 4px;\n}\n\n.asientos .screen-section p {\n  color: #fff;\n  text-transform: uppercase;\n  margin: 0px;\n}\n\n.print-button-container {\n  width: 100%;\n  text-align: center;\n  margin-top: 25px;\n  color: white !important;\n}\n\n.print-button-container button {\n  background-color: #004998;\n  color: white;\n}\n\n.header-container {\n  margin-bottom: 25px;\n}\n\n.welcome-label {\n  display: inline-block;\n}\n\n.side-menu {\n  float: right;\n}\n\n.side-menu button {\n  color: #FFFFFF;\n  background-color: #3f51b5;\n  min-width: 150px;\n  margin-left: 10px;\n}\n\n.user-id {\n  position: absolute;\n  top: 60px;\n}\n\n@media print {\n  #printJS-form {\n    page-break-after: always;\n  }\n}\n\n.button-select-seat {\n  display: inline-block;\n  margin-top: 43px;\n  color: white;\n}\n\n.mat-header-cell {\n  width: 200px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXJ2YWNpb25lcy9DOlxcVXNlcnNcXHJvZHNvZnRcXERvY3VtZW50c1xcUm9kc29mdFxcd2ViXFx0YXF1aWxsYS9zcmNcXGFwcFxccmVzZXJ2YWNpb25lc1xccmVzZXJ2YWNpb25lcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzZXJ2YWNpb25lcy9yZXNlcnZhY2lvbmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURFRTtFQUNFLHFCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxxQkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7QUNDSjs7QURFRTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNDTjs7QURFSTtFQUNFLGNBQUE7QUNBTjs7QURHSTtFQUNFLGdCQUFBO0FDRE47O0FESUk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDRk47O0FESU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNGUjs7QURJUTtFQUNFLFlBQUE7QUNGVjs7QURJVTtFQUNFLFdBQUE7QUNGWjs7QURLVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0haOztBRE1VO0VBQ0UseUJBQUE7QUNKWjs7QURRVTtFQUNFLGtCQUFBO0FDTlo7O0FEU1U7RUFFRSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUNSWjs7QURXVTtFQUNFLG9DQUFBO0FDVFo7O0FEWVU7RUFDRSx5QkFBQTtBQ1ZaOztBRGdCSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2ROOztBRGdCTTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNkUjs7QURtQkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDaEJKOztBRG1CRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ2hCSjs7QURtQkU7RUFDRSxtQkFBQTtBQ2hCSjs7QURtQkU7RUFDRSxxQkFBQTtBQ2hCSjs7QURtQkU7RUFDRSxZQUFBO0FDaEJKOztBRG1CRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNoQko7O0FEbUJFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDaEJKOztBRG1CRTtFQUNFO0lBQWdCLHdCQUFBO0VDZmxCO0FBQ0Y7O0FEaUJFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNmSjs7QURrQkU7RUFDRSx1QkFBQTtBQ2ZKIiwiZmlsZSI6InNyYy9hcHAvcmVzZXJ2YWNpb25lcy9yZXNlcnZhY2lvbmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLnJlaW1wcmVzaW9uLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLnNpZGUtbWVudSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlLW1lbnUgYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uby10aWNrZXRzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1yZXN1bHRzIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aWNrZXRzLWxpc3Qge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLnRpY2tldCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnByaW50LWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC5wZWxpY3VsYXMtdGl0bGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuICBcclxuICAuY29tcGxlam8ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICBcclxuICAucGVsaWN1bGEge1xyXG4gICAgd2lkdGg6IDEzJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuICBcclxuICAucGVsaWN1bGEgbWF0LWNhcmQge1xyXG4gICAgbWluLWhlaWdodDogNDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5wZWxpY3VsYSBpbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuaG9yYXJpbyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmhvcmFyaW8gaDUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmhvcmEge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNhbGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E2YTZhNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg3ZDllNTtcclxuICB9XHJcbiAgXHJcbiAgLnByZWNpby1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnByZWNpby1jb250YWluZXIgZGl2IHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICBcclxuICAucHJlY2lvLWNvbnRhaW5lciBkaXYgaDQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgLm5leHQtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLm5leHQtYnV0dG9uIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0OTk4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuYXNpZW50b3MtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAubW92aWUtY2FyZCB7XHJcbiAgICB3aWR0aDogMTklO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb3ZpZS1jYXJkIG1hdC1jYXJkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm1vdmllLWNhcmQgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYXNpZW50b3Mge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTJDMzY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBcclxuICAgIGgyIHtcclxuICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5yb29tLW5hbWUge1xyXG4gICAgICBjb2xvcjogIzZBNzI3NTtcclxuICAgIH1cclxuICBcclxuICAgIC50YWJsZS13aW5kb3cge1xyXG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnRhYmxlLXdpbmRvdyAuc2VhdHMtdGFibGUtY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDk0JTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgXHJcbiAgICAgIHRhYmxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgICAgICBib3JkZXItc3BhY2luZzogNXB4O1xyXG4gIFxyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICBcclxuICAgICAgICAgIC5zZWF0LWxldHRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgLnNlYXQge1xyXG4gICAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MEM4Nzg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIHRkLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjllMDU7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICAgICAgICB0ZC5oaWRkZW4ge1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICB0ZC5zcGVjaWFsIHtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9kaXNhYmlsaXR5LWljb24uc3ZnJyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgdGQuZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczZjRiICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRkLmFwYXJ0YWRvIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NGM2ODtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5zY3JlZW4tc2VjdGlvbiB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NDk3Qjc7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICBcclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucHJpbnQtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnByaW50LWJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDQ5OTg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC53ZWxjb21lLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLnNpZGUtbWVudSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlLW1lbnUgYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnVzZXItaWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgcHJpbnQge1xyXG4gICAgI3ByaW50SlMtZm9ybSB7IHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5czsgfVxyXG4gIH1cclxuICBcclxuICAuYnV0dG9uLXNlbGVjdC1zZWF0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDQzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG4gIH0iLCIuaGVhZGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5yZWltcHJlc2lvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNpZGUtbWVudSB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnNpZGUtbWVudSBidXR0b24ge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLm5vLXRpY2tldHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWFyY2gtcmVzdWx0cyB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi50aWNrZXRzLWxpc3Qge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGlja2V0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbi5wcmludC1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5wZWxpY3VsYXMtdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLmNvbXBsZWpvIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuXG4ucGVsaWN1bGEge1xuICB3aWR0aDogMTMlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMSU7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuXG4ucGVsaWN1bGEgbWF0LWNhcmQge1xuICBtaW4taGVpZ2h0OiA0MTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGVsaWN1bGEgaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtaW4taGVpZ2h0OiAxODBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ob3JhcmlvIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UwRTBFMDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhvcmFyaW8gaDUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ob3JhIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uc2FsYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNmE2YTY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3ZDllNTtcbn1cblxuLnByZWNpby1jb250YWluZXIge1xuICB3aWR0aDogMjAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucHJlY2lvLWNvbnRhaW5lciBkaXYge1xuICB3aWR0aDogMzMlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnByZWNpby1jb250YWluZXIgZGl2IGg0IHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5leHQtYnV0dG9uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLm5leHQtYnV0dG9uIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQ5OTg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFzaWVudG9zLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm1vdmllLWNhcmQge1xuICB3aWR0aDogMTklO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcbn1cblxuLm1vdmllLWNhcmQgbWF0LWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb3ZpZS1jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxODBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hc2llbnRvcyB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MkMzNjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uYXNpZW50b3MgaDIge1xuICBjb2xvcjogI0ZGRjtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLmFzaWVudG9zIC5yb29tLW5hbWUge1xuICBjb2xvcjogIzZBNzI3NTtcbn1cbi5hc2llbnRvcyAudGFibGUtd2luZG93IHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbi5hc2llbnRvcyAudGFibGUtd2luZG93IC5zZWF0cy10YWJsZS1jb250YWluZXIge1xuICB3aWR0aDogOTQlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5hc2llbnRvcyAudGFibGUtd2luZG93IC5zZWF0cy10YWJsZS1jb250YWluZXIgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogNXB4O1xufVxuLmFzaWVudG9zIC50YWJsZS13aW5kb3cgLnNlYXRzLXRhYmxlLWNvbnRhaW5lciB0YWJsZSB0ciB7XG4gIGhlaWdodDogYXV0bztcbn1cbi5hc2llbnRvcyAudGFibGUtd2luZG93IC5zZWF0cy10YWJsZS1jb250YWluZXIgdGFibGUgdHIgLnNlYXQtbGV0dGVyIHtcbiAgY29sb3I6ICNGRkY7XG59XG4uYXNpZW50b3MgLnRhYmxlLXdpbmRvdyAuc2VhdHMtdGFibGUtY29udGFpbmVyIHRhYmxlIHRyIC5zZWF0IHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTBDODc4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XG4gIGNvbG9yOiAjRkZGO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXNpZW50b3MgLnRhYmxlLXdpbmRvdyAuc2VhdHMtdGFibGUtY29udGFpbmVyIHRhYmxlIHRyIHRkLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjllMDU7XG59XG4uYXNpZW50b3MgLnRhYmxlLXdpbmRvdyAuc2VhdHMtdGFibGUtY29udGFpbmVyIHRhYmxlIHRyIHRkLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5hc2llbnRvcyAudGFibGUtd2luZG93IC5zZWF0cy10YWJsZS1jb250YWluZXIgdGFibGUgdHIgdGQuc3BlY2lhbCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuLmFzaWVudG9zIC50YWJsZS13aW5kb3cgLnNlYXRzLXRhYmxlLWNvbnRhaW5lciB0YWJsZSB0ciB0ZC5kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzNmNGIgIWltcG9ydGFudDtcbn1cbi5hc2llbnRvcyAudGFibGUtd2luZG93IC5zZWF0cy10YWJsZS1jb250YWluZXIgdGFibGUgdHIgdGQuYXBhcnRhZG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0YzY4O1xufVxuLmFzaWVudG9zIC5zY3JlZW4tc2VjdGlvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NDk3Qjc7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cbi5hc2llbnRvcyAuc2NyZWVuLXNlY3Rpb24gcCB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDBweDtcbn1cblxuLnByaW50LWJ1dHRvbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnByaW50LWJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDk5ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi53ZWxjb21lLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2lkZS1tZW51IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc2lkZS1tZW51IGJ1dHRvbiB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnVzZXItaWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjBweDtcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgI3ByaW50SlMtZm9ybSB7XG4gICAgcGFnZS1icmVhay1hZnRlcjogYWx3YXlzO1xuICB9XG59XG4uYnV0dG9uLXNlbGVjdC1zZWF0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA0M3B4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/reservaciones/reservaciones.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/reservaciones/reservaciones.component.ts ***!
  \**********************************************************/
/*! exports provided: ReservacionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservacionesComponent", function() { return ReservacionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cancelar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cancelar.service */ "./src/app/services/cancelar.service.ts");
/* harmony import */ var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/peliculas.service */ "./src/app/services/peliculas.service.ts");
/* harmony import */ var _services_salas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/salas.service */ "./src/app/services/salas.service.ts");
/* harmony import */ var _services_pagos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/pagos.service */ "./src/app/services/pagos.service.ts");
/* harmony import */ var _services_tickets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/tickets.service */ "./src/app/services/tickets.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");










var ReservacionesComponent = /** @class */ (function () {
    function ReservacionesComponent(cancelarService, peliculasService, salasService, pagosService, ticketsService, router, oauthService) {
        this.cancelarService = cancelarService;
        this.peliculasService = peliculasService;
        this.salasService = salasService;
        this.pagosService = pagosService;
        this.ticketsService = ticketsService;
        this.router = router;
        this.oauthService = oauthService;
        this.reservacionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            nombreReservacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
        });
        this.totalTickets = 0;
        this.total = 0;
        this.selectedSeats = [];
        this.selectedPrecios = [];
        this.preciosToPrint = [];
        this.showPrintSection = false;
        this.userName = this.oauthService.getIdentityClaims()['username'];
        this.reimpresionAccess = true;
        // data for taquilla changue ticket
        this.currentDate = new Date().toISOString().split('T')[0];
        this.displayedColumns = ['nombre', 'pelicula', 'hora', 'fecha', 'customColumn', 'asientos', 'actionColunm'];
        this.showSearchResults = false;
    }
    ReservacionesComponent.prototype.ngOnInit = function () {
        this.getFechas();
        this.getPeliculas('');
        this.getReservaciones();
        console.log("cambio de boletos");
    };
    ReservacionesComponent.prototype.getFechas = function () {
        var _this = this;
        this.peliculasService.getFechas()
            .subscribe(function (response) {
            console.log(response);
            _this.fechas = response;
            _this.selectedDate = _this.fechas[0];
        }, function (error) {
            console.log(error);
        });
    };
    ReservacionesComponent.prototype.handleDateChange = function () {
        console.log(this.selectedDate);
        this.resetDataReservacion();
        this.getPeliculas(this.selectedDate);
    };
    //Get list of movies
    ReservacionesComponent.prototype.getPeliculas = function (date) {
        var _this = this;
        this.peliculas = [];
        this.peliculasService.getPeliculas(date)
            .subscribe(function (response) {
            console.log(response);
            _this.peliculas = response;
        }, function (error) {
            console.log(error);
        });
    };
    //Get Reservaciones
    ReservacionesComponent.prototype.getReservaciones = function () {
        var _this = this;
        this.ticketsService.getReservaciones()
            .subscribe(function (getTicketsResponse) {
            console.log('getReservaciones', getTicketsResponse);
            _this.showSearchResults = true;
            if (getTicketsResponse.length > 0) {
                _this.ticketsFound = getTicketsResponse;
            }
            else {
                _this.ticketsFound = null;
            }
        }, function (error) {
            console.log('getTicketsResponse error', error);
        });
    };
    // Reset cambio
    ReservacionesComponent.prototype.resetDataReservacion = function () {
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
    };
    ReservacionesComponent.prototype.handleHorarioSelection = function (horario, pelicula) {
        this.resetDataReservacion();
        this.selectedHorario = horario;
        this.selectedMovie = pelicula;
        this.selectedHorario.precios.map(function (precio) { return precio.boletos = 0; });
        console.log("selected time");
    };
    ReservacionesComponent.prototype.handleDecreaseButton = function (precio) {
        if (this.totalTickets <= 0 || precio.boletos <= 0) {
            return;
        }
        this.totalTickets--;
        precio.boletos--;
        this.total -= Number(precio.precio);
        this.removePrecio(precio.id);
    };
    ReservacionesComponent.prototype.handleIncreaseButton = function (precio) {
        this.totalTickets++;
        precio.boletos++;
        this.total += Number(precio.precio);
        this.addPrecio(precio.id);
    };
    ReservacionesComponent.prototype.addPrecio = function (id) {
        this.selectedPrecios.push(id);
        for (var i = 0; i < this.selectedHorario.precios.length; i++) {
            if (this.selectedHorario.precios[i].id == id) {
                this.preciosToPrint.push(this.selectedHorario.precios[i]);
                break;
            }
        }
        console.log(this.preciosToPrint);
    };
    ReservacionesComponent.prototype.removePrecio = function (id) {
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
    };
    ReservacionesComponent.prototype.handleNextButton = function () {
        if (this.reservacionForm.valid) {
            console.log('Event correct with name');
            this.name = this.reservacionForm.value.nombreReservacion;
            this.getRoomData();
        }
    };
    ReservacionesComponent.prototype.getRoomData = function () {
        var _this = this;
        var salaId = this.selectedHorario.id;
        this.salasService.getSalaById(salaId)
            .subscribe(function (response) {
            _this.seats = response['distribucion'];
        }, function (error) {
            console.log(error);
        });
    };
    ReservacionesComponent.prototype.handleSeatButton = function (seat) {
        if (seat.tipo == 0 || seat.ocupado === true) {
            return;
        }
        if (seat.active && seat.active === true) {
            seat.active = false;
            this.removeSeat(seat);
        }
        else if (this.selectedSeats.length >= this.totalTickets) {
            console.log('limite alcanzado');
            return;
        }
        else {
            seat.active = true;
            this.addSeat(seat);
        }
    };
    ReservacionesComponent.prototype.addSeat = function (seat) {
        this.selectedSeats.push(seat);
    };
    ReservacionesComponent.prototype.removeSeat = function (seat) {
        var _this = this;
        this.selectedSeats.forEach(function (currentSeat, index) {
            if (currentSeat.id === seat.id) {
                _this.selectedSeats.splice(index, 1);
            }
        });
    };
    ReservacionesComponent.prototype.handleReservarButon = function () {
        console.log("Reservar");
        this.reservarTickets();
    };
    ReservacionesComponent.prototype.reservarTickets = function () {
        var _this = this;
        var horarioId = this.selectedHorario.id;
        var paymentData = {
            type: "taquilla",
            nombre: this.name,
            asientos: [],
            precios: this.selectedPrecios
        };
        this.selectedSeats.forEach(function (seat) { return paymentData.asientos.push(seat.id); });
        this.ticketsService.reservarTickets(horarioId, paymentData)
            .subscribe(function (response) {
            _this.router.navigate(['/taquilla']);
            console.log("Reservacion echa!");
        }, function (error) {
            console.log(error);
        });
    };
    ReservacionesComponent.prototype.cancelarReservacion = function (id) {
        var _this = this;
        this.ticketsService.cancelResevacion(id)
            .subscribe(function (response) {
            console.log("Reservacion cancelada!");
            _this.getReservaciones();
        }, function (error) {
            console.log(error);
        });
    };
    ReservacionesComponent.ctorParameters = function () { return [
        { type: _services_cancelar_service__WEBPACK_IMPORTED_MODULE_2__["CancelarService"] },
        { type: _services_peliculas_service__WEBPACK_IMPORTED_MODULE_3__["PeliculasService"] },
        { type: _services_salas_service__WEBPACK_IMPORTED_MODULE_4__["SalasService"] },
        { type: _services_pagos_service__WEBPACK_IMPORTED_MODULE_5__["PagosService"] },
        { type: _services_tickets_service__WEBPACK_IMPORTED_MODULE_6__["TicketsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_9__["OAuthService"] }
    ]; };
    ReservacionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reservaciones',
            template: __webpack_require__(/*! raw-loader!./reservaciones.component.html */ "./node_modules/raw-loader/index.js!./src/app/reservaciones/reservaciones.component.html"),
            styles: [__webpack_require__(/*! ./reservaciones.component.scss */ "./src/app/reservaciones/reservaciones.component.scss")]
        })
    ], ReservacionesComponent);
    return ReservacionesComponent;
}());



/***/ }),

/***/ "./src/app/services/cancelar.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/cancelar.service.ts ***!
  \**********************************************/
/*! exports provided: CancelarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelarService", function() { return CancelarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CancelarService = /** @class */ (function () {
    //private apiUrl = 'http://taquilla.localhost';
    function CancelarService(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = 'https://taquilla.plazasanjavier.com';
    }
    CancelarService.prototype.cancelTicket = function (boletoAsientoId, delelteAll, user, password, motivo) {
        //make the body params
        var data = {
            'user': user,
            'pass': password,
            'motivo': motivo
        };
        return this.httpClient.post(this.apiUrl + "/boletos/cancelar/" + boletoAsientoId + "/" + delelteAll, data);
    };
    CancelarService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CancelarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CancelarService);
    return CancelarService;
}());



/***/ }),

/***/ "./src/app/services/pagos.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/pagos.service.ts ***!
  \*******************************************/
/*! exports provided: PagosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagosService", function() { return PagosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PagosService = /** @class */ (function () {
    //private apiUrl = 'http://taquilla.localhost';
    function PagosService(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = 'https://taquilla.plazasanjavier.com';
    }
    PagosService.prototype.payTickets = function (horarioId, paymentData) {
        return this.httpClient.post(this.apiUrl + "/boletos/horario/" + horarioId + "/pagar", paymentData);
    };
    PagosService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PagosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PagosService);
    return PagosService;
}());



/***/ }),

/***/ "./src/app/services/peliculas.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/peliculas.service.ts ***!
  \***********************************************/
/*! exports provided: PeliculasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeliculasService", function() { return PeliculasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PeliculasService = /** @class */ (function () {
    //private apiUrl = 'http://mobile.localhost';
    function PeliculasService(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = 'https://mobile.plazasanjavier.com';
    }
    PeliculasService.prototype.getPeliculas = function (date) {
        if (!date) {
            date = '';
        }
        else {
            date = '/' + date;
        }
        return this.httpClient.get(this.apiUrl + "/cartelera" + date);
    };
    PeliculasService.prototype.getFechas = function () {
        return this.httpClient.get(this.apiUrl + "/fechas");
    };
    PeliculasService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PeliculasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PeliculasService);
    return PeliculasService;
}());



/***/ }),

/***/ "./src/app/services/reporte.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/reporte.service.ts ***!
  \*********************************************/
/*! exports provided: ReporteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteService", function() { return ReporteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ReporteService = /** @class */ (function () {
    //private apiUrl = 'http://taquilla.localhost';
    function ReporteService(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = 'https://taquilla.plazasanjavier.com';
    }
    ReporteService.prototype.getReport = function (boletoCreado, username) {
        return this.httpClient.get(this.apiUrl + "/reportes/ventas/dia?boleto_creado=" + boletoCreado + "?username=" + username);
    };
    ReporteService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ReporteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ReporteService);
    return ReporteService;
}());



/***/ }),

/***/ "./src/app/services/salas.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/salas.service.ts ***!
  \*******************************************/
/*! exports provided: SalasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalasService", function() { return SalasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SalasService = /** @class */ (function () {
    //private apiUrl = 'http://mobile.localhost';
    function SalasService(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = ' https://mobile.plazasanjavier.com';
    }
    SalasService.prototype.getSalaById = function (salaId) {
        return this.httpClient.get(this.apiUrl + "/horario/" + salaId + "/sala");
    };
    SalasService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SalasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SalasService);
    return SalasService;
}());



/***/ }),

/***/ "./src/app/services/tickets.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/tickets.service.ts ***!
  \*********************************************/
/*! exports provided: TicketsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsService", function() { return TicketsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");




var TicketsService = /** @class */ (function () {
    //private apiUrl = 'http://taquilla.localhost';
    function TicketsService(httpClient, oauthService) {
        this.httpClient = httpClient;
        this.oauthService = oauthService;
        this.apiUrl = 'https://taquilla.plazasanjavier.com';
    }
    TicketsService.prototype.getByCodigo = function (codigoBoleto) {
        return this.httpClient.get(this.apiUrl + "/boletos/code/" + codigoBoleto);
    };
    TicketsService.prototype.getCurrentUserTickets = function () {
        return this.httpClient.get(this.apiUrl + "/boletos");
    };
    TicketsService.prototype.printTickets = function (ticketsData) {
        console.log(ticketsData);
        return this.httpClient.post("http://localhost/print/index.php", ticketsData);
    };
    TicketsService.prototype.reservarTickets = function (horarioId, ticketsData) {
        console.log(ticketsData);
        return this.httpClient.post(this.apiUrl + "/apartados/horario/" + horarioId, ticketsData);
    };
    TicketsService.prototype.getReservaciones = function () {
        return this.httpClient.get(this.apiUrl + "/apartados");
    };
    TicketsService.prototype.cancelResevacion = function (id) {
        return this.httpClient.delete(this.apiUrl + "/apartados/cancelar/" + id);
    };
    TicketsService.prototype.getValidacion = function (hash) {
        return this.httpClient.get(this.apiUrl + "/boletos/validar/" + hash);
    };
    TicketsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthService"] }
    ]; };
    TicketsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], TicketsService);
    return TicketsService;
}());



/***/ }),

/***/ "./src/app/shared/angular-material.module.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/angular-material.module.ts ***!
  \***************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"],
                //  Formularios
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
                // CDk
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"],
                //  Formularios
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_LABEL_GLOBAL_OPTIONS"], useValue: { float: 'always' } },
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/taquilla/taquilla.component.scss":
/*!**************************************************!*\
  !*** ./src/app/taquilla/taquilla.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".peliculas-title {\n  display: inline-block;\n}\n\n.mat-form-field {\n  float: right;\n  width: 250px;\n}\n\n.complejo {\n  margin-right: 25px;\n}\n\n.pelicula {\n  width: 13%;\n  display: inline-block;\n  margin-right: 1%;\n  margin-bottom: 25px;\n  vertical-align: top;\n  min-height: 300px;\n}\n\n.pelicula mat-card {\n  min-height: 415px;\n  text-align: center;\n}\n\n.pelicula img {\n  width: 200px;\n  min-height: 180px;\n  height: auto;\n  margin-bottom: 15px;\n  text-align: center;\n}\n\n.horario {\n  border: 1px solid #E0E0E0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  margin: 0 auto;\n  border-radius: 4px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  cursor: pointer;\n}\n\n.horario h5 {\n  display: inline-block;\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n\n.hora {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.sala {\n  background-color: #a6a6a6;\n  color: white;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.active {\n  background-color: #87d9e5;\n}\n\n.precio-container {\n  width: 200px;\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 10px;\n}\n\n.precio-container div {\n  width: 33%;\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.precio-container div h4 {\n  margin-top: 0;\n}\n\n.next-button {\n  margin: 0 auto;\n  width: 250px;\n  margin-top: 25px;\n}\n\n.next-button button {\n  background-color: #004998;\n  color: white;\n}\n\n.asientos-container {\n  position: relative;\n  width: 100%;\n  height: auto;\n}\n\n.movie-card {\n  width: 19%;\n  vertical-align: top;\n  position: relative;\n  display: inline-block;\n  margin-right: 1%;\n}\n\n.movie-card mat-card {\n  text-align: center;\n}\n\n.movie-card img {\n  width: 100%;\n  min-height: 180px;\n  height: auto;\n  margin-bottom: 15px;\n  text-align: center;\n}\n\n.asientos {\n  width: 80%;\n  height: auto;\n  background-color: #252C36;\n  text-align: center;\n  vertical-align: top;\n  position: relative;\n  display: inline-block;\n  padding-top: 25px;\n  padding-bottom: 25px;\n  border-radius: 2px;\n}\n\n.asientos h2 {\n  color: #FFF;\n  margin-top: 0px;\n}\n\n.asientos .room-name {\n  color: #6A7275;\n}\n\n.asientos .table-window {\n  overflow: scroll;\n}\n\n.asientos .table-window .seats-table-container {\n  width: 94%;\n  height: auto;\n  display: inline-block;\n}\n\n.asientos .table-window .seats-table-container table {\n  width: 100%;\n  height: auto;\n  border-collapse: separate;\n  border-spacing: 5px;\n}\n\n.asientos .table-window .seats-table-container table tr {\n  height: auto;\n}\n\n.asientos .table-window .seats-table-container table tr .seat-letter {\n  color: #FFF;\n}\n\n.asientos .table-window .seats-table-container table tr .seat {\n  width: 3rem;\n  height: 2rem;\n  font-size: 1rem;\n  background-color: #50C878;\n  border-radius: 5px 5px 0px 0px;\n  color: #FFF;\n  cursor: pointer;\n}\n\n.asientos .table-window .seats-table-container table tr td.active {\n  background-color: #ff9e05;\n}\n\n.asientos .table-window .seats-table-container table tr td.hidden {\n  visibility: hidden;\n}\n\n.asientos .table-window .seats-table-container table tr td.special {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.asientos .table-window .seats-table-container table tr td.disabled {\n  background-color: #373f4b !important;\n}\n\n.asientos .table-window .seats-table-container table tr td.apartado {\n  background-color: #384c68;\n}\n\n.asientos .screen-section {\n  width: 90%;\n  height: 20px;\n  margin: 0 auto;\n  background-color: #7497B7;\n  border-radius: 2px;\n  padding-top: 4px;\n}\n\n.asientos .screen-section p {\n  color: #fff;\n  text-transform: uppercase;\n  margin: 0px;\n}\n\n.print-button-container {\n  width: 100%;\n  text-align: center;\n  margin-top: 25px;\n  color: white !important;\n}\n\n.print-button-container button {\n  background-color: #004998;\n  color: white;\n}\n\n.header-container {\n  margin-bottom: 25px;\n}\n\n.welcome-label {\n  display: inline-block;\n}\n\n.side-menu {\n  float: right;\n}\n\n.side-menu button {\n  color: #FFFFFF;\n  background-color: #3f51b5;\n  min-width: 150px;\n  margin-left: 0px;\n  display: block;\n}\n\n.display-block-btn {\n  display: block;\n}\n\n.user-id {\n  position: absolute;\n  top: 60px;\n}\n\n@media print {\n  #printJS-form {\n    page-break-after: always;\n  }\n}\n\n.button-select-seat {\n  display: inline-block;\n  margin-top: 43px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFxdWlsbGEvQzpcXFVzZXJzXFxyb2Rzb2Z0XFxEb2N1bWVudHNcXFJvZHNvZnRcXHdlYlxcdGFxdWlsbGEvc3JjXFxhcHBcXHRhcXVpbGxhXFx0YXF1aWxsYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFxdWlsbGEvdGFxdWlsbGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0FDQUo7O0FER0U7RUFDRSxnQkFBQTtBQ0RKOztBRElFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBRElJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDRk47O0FESU07RUFDRSxZQUFBO0FDRlI7O0FESVE7RUFDRSxXQUFBO0FDRlY7O0FES1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNIVjs7QURNUTtFQUNFLHlCQUFBO0FDSlY7O0FEUVE7RUFDRSxrQkFBQTtBQ05WOztBRFNRO0VBRUUsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FDUlY7O0FEV1E7RUFDRSxvQ0FBQTtBQ1RWOztBRFlRO0VBQ0UseUJBQUE7QUNWVjs7QURnQkU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNkSjs7QURnQkk7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDZE47O0FEbUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ2hCRjs7QURtQkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsbUJBQUE7QUNoQkY7O0FEbUJBO0VBQ0UscUJBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsWUFBQTtBQ2hCRjs7QURtQkE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ2hCRjs7QURtQkE7RUFDRSxjQUFBO0FDaEJGOztBRG1CQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQ2hCRjs7QURtQkE7RUFDRTtJQUFnQix3QkFBQTtFQ2ZoQjtBQUNGOztBRGlCQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDZkYiLCJmaWxlIjoic3JjL2FwcC90YXF1aWxsYS90YXF1aWxsYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZWxpY3VsYXMtdGl0bGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4uY29tcGxlam8ge1xyXG4gIG1hcmdpbi1yaWdodDogMjVweDtcclxufVxyXG5cclxuLnBlbGljdWxhIHtcclxuICB3aWR0aDogMTMlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLnBlbGljdWxhIG1hdC1jYXJkIHtcclxuICBtaW4taGVpZ2h0OiA0MTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wZWxpY3VsYSBpbWcge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtaW4taGVpZ2h0OiAxODBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ob3JhcmlvIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ob3JhcmlvIGg1IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhvcmEge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uc2FsYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2YTZhNjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4N2Q5ZTU7XHJcbn1cclxuXHJcbi5wcmVjaW8tY29udGFpbmVyIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucHJlY2lvLWNvbnRhaW5lciBkaXYge1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ucHJlY2lvLWNvbnRhaW5lciBkaXYgaDQge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5uZXh0LWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5uZXh0LWJ1dHRvbiBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQ5OTg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYXNpZW50b3MtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubW92aWUtY2FyZCB7XHJcbiAgd2lkdGg6IDE5JTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcclxufVxyXG5cclxuLm1vdmllLWNhcmQgbWF0LWNhcmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vdmllLWNhcmQgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxODBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hc2llbnRvcyB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MkMzNjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHJcbiAgaDIge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG5cclxuICAucm9vbS1uYW1lIHtcclxuICAgIGNvbG9yOiAjNkE3Mjc1O1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlLXdpbmRvdyB7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlLXdpbmRvdyAuc2VhdHMtdGFibGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5NCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gICAgICBib3JkZXItc3BhY2luZzogNXB4O1xyXG5cclxuICAgICAgdHIge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICAgICAgLnNlYXQtbGV0dGVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlYXQge1xyXG4gICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTBDODc4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZC5hY3RpdmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWUwNTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0ZC5oaWRkZW4ge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGQuc3BlY2lhbCB7XHJcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2Rpc2FiaWxpdHktaWNvbi5zdmcnKTtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZC5kaXNhYmxlZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczZjRiICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZC5hcGFydGFkbyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0YzY4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNjcmVlbi1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NDk3Qjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG5cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJpbnQtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcmludC1idXR0b24tY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDk5ODtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4ud2VsY29tZS1sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc2lkZS1tZW51IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5zaWRlLW1lbnUgYnV0dG9uIHtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRpc3BsYXktYmxvY2stYnRuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnVzZXItaWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDYwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgI3ByaW50SlMtZm9ybSB7IHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5czsgfVxyXG59XHJcblxyXG4uYnV0dG9uLXNlbGVjdC1zZWF0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogNDNweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iLCIucGVsaWN1bGFzLXRpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLmNvbXBsZWpvIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuXG4ucGVsaWN1bGEge1xuICB3aWR0aDogMTMlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMSU7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuXG4ucGVsaWN1bGEgbWF0LWNhcmQge1xuICBtaW4taGVpZ2h0OiA0MTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGVsaWN1bGEgaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtaW4taGVpZ2h0OiAxODBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ob3JhcmlvIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UwRTBFMDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhvcmFyaW8gaDUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ob3JhIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uc2FsYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNmE2YTY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3ZDllNTtcbn1cblxuLnByZWNpby1jb250YWluZXIge1xuICB3aWR0aDogMjAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucHJlY2lvLWNvbnRhaW5lciBkaXYge1xuICB3aWR0aDogMzMlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnByZWNpby1jb250YWluZXIgZGl2IGg0IHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5leHQtYnV0dG9uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLm5leHQtYnV0dG9uIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQ5OTg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFzaWVudG9zLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm1vdmllLWNhcmQge1xuICB3aWR0aDogMTklO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcbn1cblxuLm1vdmllLWNhcmQgbWF0LWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb3ZpZS1jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxODBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hc2llbnRvcyB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MkMzNjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uYXNpZW50b3MgaDIge1xuICBjb2xvcjogI0ZGRjtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLmFzaWVudG9zIC5yb29tLW5hbWUge1xuICBjb2xvcjogIzZBNzI3NTtcbn1cbi5hc2llbnRvcyAudGFibGUtd2luZG93IHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbi5hc2llbnRvcyAudGFibGUtd2luZG93IC5zZWF0cy10YWJsZS1jb250YWluZXIge1xuICB3aWR0aDogOTQlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5hc2llbnRvcyAudGFibGUtd2luZG93IC5zZWF0cy10YWJsZS1jb250YWluZXIgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogNXB4O1xufVxuLmFzaWVudG9zIC50YWJsZS13aW5kb3cgLnNlYXRzLXRhYmxlLWNvbnRhaW5lciB0YWJsZSB0ciB7XG4gIGhlaWdodDogYXV0bztcbn1cbi5hc2llbnRvcyAudGFibGUtd2luZG93IC5zZWF0cy10YWJsZS1jb250YWluZXIgdGFibGUgdHIgLnNlYXQtbGV0dGVyIHtcbiAgY29sb3I6ICNGRkY7XG59XG4uYXNpZW50b3MgLnRhYmxlLXdpbmRvdyAuc2VhdHMtdGFibGUtY29udGFpbmVyIHRhYmxlIHRyIC5zZWF0IHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTBDODc4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XG4gIGNvbG9yOiAjRkZGO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXNpZW50b3MgLnRhYmxlLXdpbmRvdyAuc2VhdHMtdGFibGUtY29udGFpbmVyIHRhYmxlIHRyIHRkLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjllMDU7XG59XG4uYXNpZW50b3MgLnRhYmxlLXdpbmRvdyAuc2VhdHMtdGFibGUtY29udGFpbmVyIHRhYmxlIHRyIHRkLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5hc2llbnRvcyAudGFibGUtd2luZG93IC5zZWF0cy10YWJsZS1jb250YWluZXIgdGFibGUgdHIgdGQuc3BlY2lhbCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuLmFzaWVudG9zIC50YWJsZS13aW5kb3cgLnNlYXRzLXRhYmxlLWNvbnRhaW5lciB0YWJsZSB0ciB0ZC5kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzNmNGIgIWltcG9ydGFudDtcbn1cbi5hc2llbnRvcyAudGFibGUtd2luZG93IC5zZWF0cy10YWJsZS1jb250YWluZXIgdGFibGUgdHIgdGQuYXBhcnRhZG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0YzY4O1xufVxuLmFzaWVudG9zIC5zY3JlZW4tc2VjdGlvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NDk3Qjc7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cbi5hc2llbnRvcyAuc2NyZWVuLXNlY3Rpb24gcCB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDBweDtcbn1cblxuLnByaW50LWJ1dHRvbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnByaW50LWJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDk5ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi53ZWxjb21lLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2lkZS1tZW51IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc2lkZS1tZW51IGJ1dHRvbiB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRpc3BsYXktYmxvY2stYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi51c2VyLWlkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwcHg7XG59XG5cbkBtZWRpYSBwcmludCB7XG4gICNwcmludEpTLWZvcm0ge1xuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5cztcbiAgfVxufVxuLmJ1dHRvbi1zZWxlY3Qtc2VhdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNDNweDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/taquilla/taquilla.component.ts":
/*!************************************************!*\
  !*** ./src/app/taquilla/taquilla.component.ts ***!
  \************************************************/
/*! exports provided: TaquillaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaquillaComponent", function() { return TaquillaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/peliculas.service */ "./src/app/services/peliculas.service.ts");
/* harmony import */ var _services_salas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/salas.service */ "./src/app/services/salas.service.ts");
/* harmony import */ var _services_pagos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/pagos.service */ "./src/app/services/pagos.service.ts");
/* harmony import */ var _services_tickets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/tickets.service */ "./src/app/services/tickets.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");









var TaquillaComponent = /** @class */ (function () {
    function TaquillaComponent(peliculasService, salasService, pagosService, router, oauthService, ticketsService, toastr) {
        this.peliculasService = peliculasService;
        this.salasService = salasService;
        this.pagosService = pagosService;
        this.router = router;
        this.oauthService = oauthService;
        this.ticketsService = ticketsService;
        this.toastr = toastr;
        this.complejos = [
            {
                label: 'Plaza San Javier',
                value: 'san_javier'
            }
        ];
        this.currentComplejo = this.complejos[0];
        this.totalTickets = 0;
        this.total = 0;
        this.selectedSeats = [];
        this.selectedPrecios = [];
        this.preciosToPrint = [];
        this.showPrintSection = false;
        this.userName = this.oauthService.getIdentityClaims()['username'];
        this.reimpresionAccess = true;
    }
    TaquillaComponent.prototype.ngOnInit = function () {
        this.checkReimpresionAccess();
        this.getPeliculas('');
        this.getFechas();
    };
    TaquillaComponent.prototype.checkReimpresionAccess = function () {
        var userData = this.oauthService.getIdentityClaims();
        this.reimpresionAccess = userData.permisos.some(function (access) { return access.key.includes('reimpresion'); });
    };
    TaquillaComponent.prototype.filterByDates = function () {
        var currentDate = new Date();
        this.filteredPeliculas = this.peliculas.filter(function (element) {
            if (currentDate > element.horarios[0].hora) {
                return element;
            }
        });
    };
    TaquillaComponent.prototype.getPeliculas = function (date) {
        var _this = this;
        this.peliculas = [];
        this.peliculasService.getPeliculas(date)
            .subscribe(function (response) {
            console.log(response);
            _this.peliculas = response;
            _this.filterByDates();
        }, function (error) {
            console.log(error);
        });
    };
    TaquillaComponent.prototype.getFechas = function () {
        var _this = this;
        this.peliculasService.getFechas()
            .subscribe(function (response) {
            console.log(response);
            _this.fechas = response;
            _this.selectedDate = _this.fechas[0];
        }, function (error) {
            console.log(error);
        });
    };
    TaquillaComponent.prototype.handleDateChange = function () {
        console.log(this.selectedDate);
        this.resetDataToDefaultValues();
        this.getPeliculas(this.selectedDate);
    };
    TaquillaComponent.prototype.resetDataToDefaultValues = function () {
        this.selectedHorario = null;
        this.totalTickets = 0;
        this.total = 0;
        this.selectedMovie = null;
        this.seats = [];
        this.selectedSeats = [];
        this.selectedPrecios = [];
        this.preciosToPrint = [];
        console.log('Reset values');
    };
    TaquillaComponent.prototype.handleHorarioSelection = function (horario, pelicula) {
        this.resetDataToDefaultValues();
        this.selectedHorario = horario;
        this.selectedMovie = pelicula;
        this.selectedHorario.precios.map(function (precio) { return precio.boletos = 0; });
    };
    TaquillaComponent.prototype.handleDecreaseButton = function (precio) {
        if (this.totalTickets <= 0 || precio.boletos <= 0) {
            return;
        }
        this.totalTickets--;
        precio.boletos--;
        this.total -= Number(precio.precio);
        this.removePrecio(precio.id);
    };
    TaquillaComponent.prototype.handleIncreaseButton = function (precio) {
        this.totalTickets++;
        precio.boletos++;
        this.total += Number(precio.precio);
        this.addPrecio(precio.id);
    };
    TaquillaComponent.prototype.addPrecio = function (id) {
        this.selectedPrecios.push(id);
        for (var i = 0; i < this.selectedHorario.precios.length; i++) {
            if (this.selectedHorario.precios[i].id == id) {
                this.preciosToPrint.push(this.selectedHorario.precios[i]);
                break;
            }
        }
        console.log(this.preciosToPrint);
    };
    TaquillaComponent.prototype.removePrecio = function (id) {
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
    };
    TaquillaComponent.prototype.handleNextButton = function () {
        this.getRoomData();
    };
    TaquillaComponent.prototype.getRoomData = function () {
        var _this = this;
        var salaId = this.selectedHorario.id;
        this.salasService.getSalaById(salaId)
            .subscribe(function (response) {
            _this.seats = response['distribucion'];
            console.log(_this.seats);
        }, function (error) {
            console.log(error);
        });
    };
    TaquillaComponent.prototype.handleSeatButton = function (seat) {
        if (seat.tipo == 0 || seat.ocupado === true) {
            return;
        }
        if (seat.active && seat.active === true) {
            seat.active = false;
            this.removeSeat(seat);
        }
        else if (this.selectedSeats.length >= this.totalTickets) {
            console.log('limite alcanzado');
            return;
        }
        else {
            seat.active = true;
            this.addSeat(seat);
        }
    };
    TaquillaComponent.prototype.addSeat = function (seat) {
        this.selectedSeats.push(seat);
    };
    TaquillaComponent.prototype.removeSeat = function (seat) {
        var _this = this;
        this.selectedSeats.forEach(function (currentSeat, index) {
            if (currentSeat.id === seat.id) {
                _this.selectedSeats.splice(index, 1);
            }
        });
    };
    TaquillaComponent.prototype.handlePrintButton = function () {
        console.log("printing...", this.selectedSeats);
        this.payTickets();
    };
    TaquillaComponent.prototype.payTickets = function () {
        var _this = this;
        var horarioId = this.selectedHorario.id;
        var paymentData = {
            type: "taquilla",
            asientos: [],
            precios: this.selectedPrecios
        };
        this.selectedSeats.forEach(function (seat) { return paymentData.asientos.push(seat.id); });
        this.pagosService.payTickets(horarioId, paymentData)
            .subscribe(function (response) {
            _this.printTickets(response.id);
        }, function (error) {
            _this.toastr.errorToastr('El boleto ya esta vendido!.', 'Oops!');
            _this.getRoomData();
            console.log(error);
        });
    };
    TaquillaComponent.prototype.printTickets = function (id) {
        var printData = {
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
        this.selectedSeats.forEach(function (seat) { return printData.seat.push(seat.nombre); });
        this.resetDataToDefaultValues();
        this.ticketsService.printTickets(printData)
            .subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
        this.resetDataToDefaultValues();
        // let printButton = document.getElementById('imprimir');
        // printButton.click();
    };
    TaquillaComponent.prototype.parseDate = function (date) {
        var newdate = new Date(date).toISOString();
        //let dia =  newdate.toLocaleString("es", { weekday: 'long' });
        //let diaNumber =  newdate.toLocaleString("es", { day: "numeric" });
        //let month =  newdate.toLocaleString("es", { month: "long" });
        //let year = newdate.toLocaleString("es", { year: "numeric"});
        //let newDformat =  dia.charAt(0).toUpperCase() + dia.slice(1) + " " + diaNumber + " " +  month.charAt(0).toUpperCase() + month.slice(1) + " " + year;
        return newdate;
    };
    TaquillaComponent.prototype.handleLogOut = function () {
        console.log('Log out event');
        this.oauthService.logOut();
        this.router.navigate(['/']);
    };
    TaquillaComponent.ctorParameters = function () { return [
        { type: _services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__["PeliculasService"] },
        { type: _services_salas_service__WEBPACK_IMPORTED_MODULE_3__["SalasService"] },
        { type: _services_pagos_service__WEBPACK_IMPORTED_MODULE_4__["PagosService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__["OAuthService"] },
        { type: _services_tickets_service__WEBPACK_IMPORTED_MODULE_5__["TicketsService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrManager"] }
    ]; };
    TaquillaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-taquilla',
            template: __webpack_require__(/*! raw-loader!./taquilla.component.html */ "./node_modules/raw-loader/index.js!./src/app/taquilla/taquilla.component.html"),
            styles: [__webpack_require__(/*! ./taquilla.component.scss */ "./src/app/taquilla/taquilla.component.scss")]
        })
    ], TaquillaComponent);
    return TaquillaComponent;
}());



/***/ }),

/***/ "./src/app/token.interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/token.interceptor.ts ***!
  \**************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(authService, errorHandler) {
        this.authService = authService;
        this.errorHandler = errorHandler;
    }
    TokenInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (this.authService.getAccessToken()) {
            req = this.addToken(req, this.authService.getAccessToken());
        }
        return next
            .handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return _this.errorHandler.handleError(error); }));
    };
    TokenInterceptor.prototype.addToken = function (req, token) {
        return req.clone({
            setHeaders: {
                'Authorization': "Bearer " + token
            }
        });
    };
    TokenInterceptor.ctorParameters = function () { return [
        { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"] },
        { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthResourceServerErrorHandler"] }
    ]; };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rodsoft\Documents\Rodsoft\web\taquilla\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map