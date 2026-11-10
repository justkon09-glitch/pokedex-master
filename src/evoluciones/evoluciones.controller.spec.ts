import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EvolucionController } from './evoluciones.controller.js';
import { EvolucionService } from './evoluciones.service.js';
import { Evolucion } from './entities/evolucione.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('EvolucionController', () => {
  let controller: EvolucionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvolucionController],
      providers: [
        EvolucionService,
        { provide: getRepositoryToken(Evolucion), useValue: repositoryMock },
      ],
    }).compile();

    controller = module.get<EvolucionController>(EvolucionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
