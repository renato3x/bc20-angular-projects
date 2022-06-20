import { Component } from '@angular/core';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Usuario = {
    aceitaTermosDeCondicao: true,
    email: '',
    genero: '',
    nome: '',
    senha: '',
    username: ''
  }

  salvarUsuario() {
    alert('Usuário salvo com sucesso')
    console.log(this.user)
  }
}
