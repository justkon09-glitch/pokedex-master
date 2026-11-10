import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TipoService } from './tipos.service.js';
import { Tipo } from './entities/tipo.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('TipoService', () => {
  let service: TipoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TipoService,
        { provide: getRepositoryToken(Tipo), useValue: repositoryMock },
      ],
    }).compile();

    service = module.get<TipoService>(TipoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
