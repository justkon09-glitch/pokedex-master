import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { GrupoHuevoController } from './grupo-huevo.controller.js';
import { GrupoHuevoService } from './grupo-huevo.service.js';
import { GrupoHuevo } from './entities/grupo-huevo.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('GrupoHuevoController', () => {
  let controller: GrupoHuevoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrupoHuevoController],
      providers: [
        GrupoHuevoService,
        { provide: getRepositoryToken(GrupoHuevo), useValue: repositoryMock },
      ],
    }).compile();

    controller = module.get<GrupoHuevoController>(GrupoHuevoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
