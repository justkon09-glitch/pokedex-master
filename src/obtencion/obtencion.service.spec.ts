import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ObtencionService } from './obtencion.service.js';
import { Obtencion } from './entities/obtencion.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('ObtencionService', () => {
  let service: ObtencionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ObtencionService,
        { provide: getRepositoryToken(Obtencion), useValue: repositoryMock },
      ],
    }).compile();

    service = module.get<ObtencionService>(ObtencionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
