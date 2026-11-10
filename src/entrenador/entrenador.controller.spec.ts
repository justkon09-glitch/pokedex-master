import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EntrenadorController } from './entrenador.controller.js';
import { EntrenadorService } from './entrenador.service.js';
import { Entrenador } from './entities/entrenador.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('EntrenadorController', () => {
  let controller: EntrenadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntrenadorController],
      providers: [
        EntrenadorService,
        { provide: getRepositoryToken(Entrenador), useValue: repositoryMock },
      ],
    }).compile();

    controller = module.get<EntrenadorController>(EntrenadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
