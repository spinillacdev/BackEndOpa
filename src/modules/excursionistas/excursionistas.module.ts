import { Module } from '@nestjs/common';
import { ExcursionistasService } from './excursionistas.service';
import { ExcursionistasController } from './excursionistas.controller';

@Module({
  controllers: [ExcursionistasController],
  providers: [ExcursionistasService],
})
export class ExcursionistasModule {}
