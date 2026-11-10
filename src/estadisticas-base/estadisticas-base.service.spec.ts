import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EstadisticaBaseService } from './estadisticas-base.service.js';
import { EstadisticaBase } from './entities/estadisticas-base.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('EstadisticaBaseService', () => {
  let service: EstadisticaBaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EstadisticaBaseService,
        { provide: getRepositoryToken(EstadisticaBase), useValue: repositoryMock },
      ],
    }).compile();

    service = module.get<EstadisticaBaseService>(EstadisticaBaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
