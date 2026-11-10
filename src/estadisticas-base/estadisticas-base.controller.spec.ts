import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EstadisticaBaseController } from './estadisticas-base.controller.js';
import { EstadisticaBaseService } from './estadisticas-base.service.js';
import { EstadisticaBase } from './entities/estadisticas-base.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('EstadisticaBaseController', () => {
  let controller: EstadisticaBaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadisticaBaseController],
      providers: [
        EstadisticaBaseService,
        { provide: getRepositoryToken(EstadisticaBase), useValue: repositoryMock },
      ],
    }).compile();

    controller = module.get<EstadisticaBaseController>(EstadisticaBaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
