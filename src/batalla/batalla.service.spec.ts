import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BatallaService } from './batalla.service.js';
import { Batalla } from './entities/batalla.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('BatallaService', () => {
  let service: BatallaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BatallaService,
        { provide: getRepositoryToken(Batalla), useValue: repositoryMock },
      ],
    }).compile();

    service = module.get<BatallaService>(BatallaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
