import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simNao'
})
export class SimNaoPipe implements PipeTransform {

  transform(emEstoque: boolean | undefined) {
    let afirmacao = '';

    if (emEstoque) {
      afirmacao = 'Sim'
    } else {
      afirmacao = 'Não'
    }

    return afirmacao;
  }
}
