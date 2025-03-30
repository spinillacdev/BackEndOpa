import { Test, TestingModule } from '@nestjs/testing';
import { ExcursionistasController } from './excursionistas.controller';
import { ExcursionistasService } from './excursionistas.service';

describe('ExcursionistasController', () => {
  let controller: ExcursionistasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExcursionistasController],
      providers: [ExcursionistasService],
    }).compile();

    controller = module.get<ExcursionistasController>(ExcursionistasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
