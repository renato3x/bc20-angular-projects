import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comunicacao-entre-componentes';
  estiloDoCartao: string = 'display: block;'

  @ViewChild('para')
  pOlaMundo!: ElementRef<HTMLParagraphElement>

  ngAfterViewInit() {
    setTimeout(() => {
      this.pOlaMundo.nativeElement.innerText = `JoJo's Bizarre Adventure é muito bom!`
    }, 6000)
  }

  deletarCartao(evento: any): void {
    console.log(evento)
    this.estiloDoCartao = 'display: none;'
  }
}
