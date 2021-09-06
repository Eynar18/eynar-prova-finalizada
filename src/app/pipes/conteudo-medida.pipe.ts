import { Pipe, PipeTransform } from '@angular/core';
import { Medida } from '../model/medida';

@Pipe({
  name: 'conteudoMedida'
})
export class CounteudoMedidaPipe implements PipeTransform {

  transform(conteudo: number, medida: Medida) {   
    return conteudo + medida;
  }
}
