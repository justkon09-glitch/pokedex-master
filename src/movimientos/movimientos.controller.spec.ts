import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MovimientoController } from './movimientos.controller.js';
import { MovimientoService } from './movimientos.service.js';
import { Movimiento } from './entities/movimiento.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('MovimientoController', () => {
  let controller: MovimientoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovimientoController],
      providers: [
        MovimientoService,
        { provide: getRepositoryToken(Movimiento), useValue: repositoryMock },
      ],
    }).compile();

    controller = module.get<MovimientoController>(MovimientoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
