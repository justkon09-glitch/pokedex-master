import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FormaService } from './forma.service.js';
import { Forma } from './entities/forma.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('FormaService', () => {
  let service: FormaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FormaService,
        { provide: getRepositoryToken(Forma), useValue: repositoryMock },
      ],
    }).compile();

    service = module.get<FormaService>(FormaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
