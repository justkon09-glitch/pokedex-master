import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HabilidadService } from './habilidades.service.js';
import { Habilidad } from './entities/habilidade.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('HabilidadService', () => {
  let service: HabilidadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HabilidadService,
        { provide: getRepositoryToken(Habilidad), useValue: repositoryMock },
      ],
    }).compile();

    service = module.get<HabilidadService>(HabilidadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
