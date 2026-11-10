import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FormaController } from './forma.controller.js';
import { FormaService } from './forma.service.js';
import { Forma } from './entities/forma.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('FormaController', () => {
  let controller: FormaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormaController],
      providers: [
        FormaService,
        { provide: getRepositoryToken(Forma), useValue: repositoryMock },
      ],
    }).compile();

    controller = module.get<FormaController>(FormaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
