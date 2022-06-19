import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

  caracteresRestantes: number = 60

  constructor() { }

  ngOnInit(): void {
  }

  atualizarCaracteresRestantes(qtd: number): void {
    this.caracteresRestantes = 60 - qtd
  }
}
