import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  nomes: string[] = ['Dani Pereira', 'Daniel Martins', 'Claudia Yokota', 'Fernando FR', 'Manuela Diniz', 'Tatiana Chiacchio']

  constructor() { }

  ngOnInit(): void {
  }

  add(nome: string): void {
    this.nomes.push(nome)
  }
}
