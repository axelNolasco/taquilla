import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reimpresion',
  templateUrl: './reimpresion.component.html',
  styleUrls: ['./reimpresion.component.scss']
})
export class ReimpresionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public handlePrintButton() {
    console.log("foo");
  }

}
