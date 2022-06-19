import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  // que a força esteja com você
  transform(value: string): string {
    return value.split(' ')
    .map((palavra) => {
      const primeiroCaractere = palavra[0]
      const resto = palavra.slice(1)

      return primeiroCaractere.toUpperCase() + resto.toLowerCase()
    }).join(' ')
  }
}
