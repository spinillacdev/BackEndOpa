import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class ElementoExcursionDto {
  @ApiProperty({
    description: 'Nombre del elemento de la excursión',
    example: 'Elemento 1',
  })
  @IsString()
  nombre: string;

  @ApiProperty({
    description: 'Peso del elemento en kilogramos',
    example: 5,
  })
  @IsNumber()
  peso: number;

  @ApiProperty({
    description: 'Cantidad de calorías del elemento',
    example: 100,
  })
  @IsNumber()
  calorias: number;
}
