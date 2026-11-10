import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RolesController } from './roles.controller.js';
import { RoleService } from './roles.service.js';
import { Role } from './entities/role.entity.js';

const repositoryMock = {
  create: (data: unknown) => data,
  save: async (data: unknown) => data,
  find: async () => [],
  findOne: async () => null,
  remove: async () => undefined,
};

describe('RolesController', () => {
  let controller: RolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolesController],
      providers: [
        RoleService,
        { provide: getRepositoryToken(Role), useValue: repositoryMock },
      ],
    }).compile();

    controller = module.get<RolesController>(RolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
