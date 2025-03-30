import { Test, TestingModule } from '@nestjs/testing';
import { ExcursionistasService } from './excursionistas.service';

describe('ExcursionistasService', () => {
  let service: ExcursionistasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExcursionistasService],
    }).compile();

    service = module.get<ExcursionistasService>(ExcursionistasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
