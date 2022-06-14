import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  saldo: number = 0

  alterarSaldo(valor: number) {
    this.saldo += valor
  }
}
