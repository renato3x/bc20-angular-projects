import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  saldo: number = 1000
  mostrarComponente: boolean = true

  alterarSaldo(valor: number) {
    this.saldo += valor
  }

  toggleMostrarComponente(): void {
    this.mostrarComponente = !this.mostrarComponente
  }
}
