import { AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mostrar-saldo',
  templateUrl: './mostrar-saldo.component.html',
  styleUrls: ['./mostrar-saldo.component.css']
})
export class MostrarSaldoComponent implements OnChanges, OnInit, AfterContentInit, AfterViewInit/*, OnDestroy*/ {

  @Input()
  appSaldo: number = 697

  appSaldoAnterior: number | string = ''

  @ViewChild('paraSaldoAnterior')
  paraSaldoAnterior!: ElementRef<HTMLParagraphElement>

  constructor() {}

  ngOnDestroy(): void {
    console.log('%cngOnDestroy executado!', 'font-size: 20px; color: green;')
  }

  ngOnChanges(changes: SimpleChanges): void { //1°
    console.log('%cngOnChanges executado!', 'font-size: 20px; color: red;')

    if (changes['appSaldo'].previousValue != undefined) {
      this.appSaldoAnterior = changes['appSaldo'].previousValue
    } else {
      this.appSaldoAnterior = 'Saldo não informado.'
    }
  }

  ngOnInit(): void { // 2°
    console.log('%cngOnInit executado!', 'font-size: 20px; color: red;')
    console.log(this.appSaldo)
  }

/*   ngDoCheck(): void {
    console.log('%cngDoCheck executado!', 'font-size: 20px; color: red;')
  } */

  ngAfterContentInit(): void { // 4°
    console.log('%cngAfterContentInit executado!', 'font-size: 20px; color: red;')
  }

  ngAfterViewInit(): void { // 6°
    console.log(this.paraSaldoAnterior.nativeElement.innerText)
  }
}
