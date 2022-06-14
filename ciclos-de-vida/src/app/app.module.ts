import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MostrarSaldoComponent } from './mostrar-saldo/mostrar-saldo.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarSaldoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
