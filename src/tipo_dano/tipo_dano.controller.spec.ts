import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TipoDanoController } from './tipo_dano.controller.js';
import { TipoDanoService } from './tipo_dano.service.js';
import { TipoDano } from './entities/tipo_dano.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('TipoDanoController', () => {
  let controller: TipoDanoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoDanoController],
      providers: [
        TipoDanoService,
        { provide: getRepositoryToken(TipoDano), useValue: repositoryMock },
      ],
    }).compile();

    controller = module.get<TipoDanoController>(TipoDanoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
