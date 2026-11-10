import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HabilidadController } from './habilidades.controller.js';
import { HabilidadService } from './habilidades.service.js';
import { Habilidad } from './entities/habilidade.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('HabilidadController', () => {
  let controller: HabilidadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HabilidadController],
      providers: [
        HabilidadService,
        { provide: getRepositoryToken(Habilidad), useValue: repositoryMock },
      ],
    }).compile();

    controller = module.get<HabilidadController>(HabilidadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
