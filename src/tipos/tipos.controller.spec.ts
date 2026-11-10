import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TipoController } from './tipos.controller.js';
import { TipoService } from './tipos.service.js';
import { Tipo } from './entities/tipo.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('TipoController', () => {
  let controller: TipoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoController],
      providers: [
        TipoService,
        { provide: getRepositoryToken(Tipo), useValue: repositoryMock },
      ],
    }).compile();

    controller = module.get<TipoController>(TipoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
