import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MovimientoService } from './movimientos.service.js';
import { Movimiento } from './entities/movimiento.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('MovimientoService', () => {
  let service: MovimientoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MovimientoService,
        { provide: getRepositoryToken(Movimiento), useValue: repositoryMock },
      ],
    }).compile();

    service = module.get<MovimientoService>(MovimientoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
