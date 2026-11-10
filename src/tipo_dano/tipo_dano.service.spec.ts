import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TipoDanoService } from './tipo_dano.service.js';
import { TipoDano } from './entities/tipo_dano.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('TipoDanoService', () => {
  let service: TipoDanoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TipoDanoService,
        { provide: getRepositoryToken(TipoDano), useValue: repositoryMock },
      ],
    }).compile();

    service = module.get<TipoDanoService>(TipoDanoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
