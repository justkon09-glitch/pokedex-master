import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RegionController } from './region.controller.js';
import { RegionService } from './region.service.js';
import { Region } from './entities/region.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('RegionController', () => {
  let controller: RegionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegionController],
      providers: [
        RegionService,
        { provide: getRepositoryToken(Region), useValue: repositoryMock },
      ],
    }).compile();

    controller = module.get<RegionController>(RegionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
