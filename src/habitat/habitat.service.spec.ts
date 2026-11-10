import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HabitatService } from './habitat.service.js';
import { Habitat } from './entities/habitat.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('HabitatService', () => {
  let service: HabitatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HabitatService,
        { provide: getRepositoryToken(Habitat), useValue: repositoryMock },
      ],
    }).compile();

    service = module.get<HabitatService>(HabitatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
