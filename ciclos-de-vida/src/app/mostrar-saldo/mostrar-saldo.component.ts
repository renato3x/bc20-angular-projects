import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mostrar-saldo',
  templateUrl: './mostrar-saldo.component.html',
  styleUrls: ['./mostrar-saldo.component.css']
})
export class MostrarSaldoComponent implements OnChanges {

  @Input()
  appSaldo: number = 0

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('%cngOnChanges executado!', 'font-size: 20px; color: red;')
    console.log(changes)
  }
}
