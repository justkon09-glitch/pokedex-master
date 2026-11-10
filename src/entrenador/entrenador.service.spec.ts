import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EntrenadorService } from './entrenador.service.js';
import { Entrenador } from './entities/entrenador.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('EntrenadorService', () => {
  let service: EntrenadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EntrenadorService,
        { provide: getRepositoryToken(Entrenador), useValue: repositoryMock },
      ],
    }).compile();

    service = module.get<EntrenadorService>(EntrenadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
