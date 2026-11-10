import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ObtencionController } from './obtencion.controller.js';
import { ObtencionService } from './obtencion.service.js';
import { Obtencion } from './entities/obtencion.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('ObtencionController', () => {
  let controller: ObtencionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObtencionController],
      providers: [
        ObtencionService,
        { provide: getRepositoryToken(Obtencion), useValue: repositoryMock },
      ],
    }).compile();

    controller = module.get<ObtencionController>(ObtencionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
