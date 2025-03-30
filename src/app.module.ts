import { Module } from '@nestjs/common';
import { ExcursionistasModule } from './modules/excursionistas/excursionistas.module';
@Module({
  imports: [ExcursionistasModule],
})
export class AppModule {}
