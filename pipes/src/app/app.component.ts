import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  subtitle: string = 'SUBTÍTULO'
  pessoa = {
    nome: 'Lucas',
    idade: 20,
    empregoAtual: 'Desempregado',
    estadoCivil: 'Solteiro'
  }
  data: Date = new Date()
}
