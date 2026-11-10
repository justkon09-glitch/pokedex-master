import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HabitatController } from './habitat.controller.js';
import { HabitatService } from './habitat.service.js';
import { Habitat } from './entities/habitat.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('HabitatController', () => {
  let controller: HabitatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HabitatController],
      providers: [
        HabitatService,
        { provide: getRepositoryToken(Habitat), useValue: repositoryMock },
      ],
    }).compile();

    controller = module.get<HabitatController>(HabitatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
