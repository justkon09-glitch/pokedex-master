import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RegionService } from './region.service.js';
import { Region } from './entities/region.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('RegionService', () => {
  let service: RegionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RegionService,
        { provide: getRepositoryToken(Region), useValue: repositoryMock },
      ],
    }).compile();

    service = module.get<RegionService>(RegionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
