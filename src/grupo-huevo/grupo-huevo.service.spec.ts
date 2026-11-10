import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { GrupoHuevoService } from './grupo-huevo.service.js';
import { GrupoHuevo } from './entities/grupo-huevo.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('GrupoHuevoService', () => {
  let service: GrupoHuevoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GrupoHuevoService,
        { provide: getRepositoryToken(GrupoHuevo), useValue: repositoryMock },
      ],
    }).compile();

    service = module.get<GrupoHuevoService>(GrupoHuevoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
