import { Controller, Get, Body, Post} from '@nestjs/common';
import { ExcursionistasService } from './excursionistas.service';
import { DatosExcursionDto } from './dto/datos-excursion.dto';

@Controller('excursionistas')
export class ExcursionistasController {
  constructor(private readonly excursionistasService: ExcursionistasService) {}

  @Post()
  create(@Body() datos: DatosExcursionDto) {
    return this.excursionistasService.obtenerElementos(datos);
  }

}
