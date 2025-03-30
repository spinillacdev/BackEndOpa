import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsPositive, IsNumber, IsArray } from 'class-validator';
import { ElementoExcursion } from '../models/elementos.model';
import { ElementoExcursionDto } from './elemento-excursion.dto';

export class DatosExcursionDto {
  @ApiProperty({
    description: 'Elementos',
    type: [ElementoExcursionDto]
  })
  @IsArray()  
  elementos: ElementoExcursion[];

  @ApiProperty({
    description: 'El peso maximo',
    example: 5,
  })
  @IsNumber() 
  @IsPositive()  
  pesoMaximo: number;

  @ApiProperty({
    description: 'Las calorías minimas',
    example: 3,
  })
  @IsInt()  
  @IsPositive() 
  caloriasMinimas: number;
}

