import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BatallaController } from './batalla.controller.js';
import { BatallaService } from './batalla.service.js';
import { Batalla } from './entities/batalla.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('BatallaController', () => {
  let controller: BatallaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BatallaController],
      providers: [
        BatallaService,
        { provide: getRepositoryToken(Batalla), useValue: repositoryMock },
      ],
    }).compile();

    controller = module.get<BatallaController>(BatallaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
