import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EvolucionService } from './evoluciones.service.js';
import { Evolucion } from './entities/evolucione.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('EvolucionService', () => {
  let service: EvolucionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EvolucionService,
        { provide: getRepositoryToken(Evolucion), useValue: repositoryMock },
      ],
    }).compile();

    service = module.get<EvolucionService>(EvolucionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
