import { Injectable } from '@nestjs/common';
import { DatosExcursionDto } from './dto/datos-excursion.dto';
import { ElementoExcursion } from './models/elementos.model';
@Injectable()
export class ExcursionistasService {
  obtenerElementos(datos: DatosExcursionDto) {
    const pesoMaximo = datos.pesoMaximo;
    const caloriasMinimas = datos.caloriasMinimas;
    const elementos = datos.elementos;

    let mejorCombinacion: any = null; 
    for (let i = 0; i < (1 << elementos.length); i++) {
      let combinacion: ElementoExcursion[] = [];
      let pesoTotal = 0;
      let caloriasTotales = 0;
  
      for (let j = 0; j < elementos.length; j++) {
        if (i & (1 << j)) {  
          combinacion.push(elementos[j]);
          pesoTotal += elementos[j].peso;
          caloriasTotales += elementos[j].calorias;
        }
      }
  
      if (pesoTotal <= pesoMaximo && caloriasTotales >= caloriasMinimas) {
        if (mejorCombinacion === null || pesoTotal < mejorCombinacion.pesoTotal) {
          mejorCombinacion = { combinacion, pesoTotal };
        }
      }
    }
  
    if (mejorCombinacion) {
      return mejorCombinacion.combinacion;
    } else {
      return []; 
    }
  }  
}
