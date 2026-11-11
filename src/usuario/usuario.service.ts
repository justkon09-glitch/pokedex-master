import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity.js';
import { Role } from '../roles/entities/role.entity.js';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
@Injectable()
export class UsuarioService {
constructor(
  @InjectRepository(Usuario)
  private repo: Repository<Usuario>,

  @InjectRepository(Role)
  private roleRepo: Repository<Role>,
) {}

async create(
  createUsuarioDto: CreateUsuarioDto,
) {

  const existeUsuario =
    await this.repo.findOne({
      where: {
        nombreUsuario:
          createUsuarioDto.nombreUsuario,
      },
    });

  if (existeUsuario) {
    throw new BadRequestException(
      'Ya existe un usuario con ese nombre',
    );
  }

  const existeCorreo =
    await this.repo.findOne({
      where: {
        correo:
          createUsuarioDto.correo,
      },
    });

  if (existeCorreo) {
    throw new BadRequestException(
      'Ya existe un usuario con ese correo',
    );
  }

  const rol =
    await this.roleRepo.findOne({
      where: {
        id: createUsuarioDto.rolId,
      },
    });

  if (!rol) {
    throw new NotFoundException(
      'El rol no existe',
    );
  }

  const item =
    this.repo.create(createUsuarioDto);

  return this.repo.save(item);
}

 findAll() { 
  return this.repo.find(); 
}

 async findOne(id:number) { 
  const item=await this.repo.findOne({where:{id} as any}); 
  if(!item) throw new NotFoundException('Registro no encontrado'); 
  return item; 
}

async update(
  id: number,
  data: Partial<Usuario>,
) {

  const item = await this.findOne(id);

  if (data.nombreUsuario) {

    const existeUsuario =
      await this.repo.findOne({
        where: {
          nombreUsuario:
            data.nombreUsuario,
        },
      });

    if (
      existeUsuario &&
      existeUsuario.id !== id
    ) {
      throw new BadRequestException(
        'Ya existe un usuario con ese nombre',
      );
    }
  }

  if (data.correo) {

    const existeCorreo =
      await this.repo.findOne({
        where: {
          correo: data.correo,
        },
      });

    if (
      existeCorreo &&
      existeCorreo.id !== id
    ) {
      throw new BadRequestException(
        'Ya existe un usuario con ese correo',
      );
    }
  }

  if (data.rolId) {

    const rol =
      await this.roleRepo.findOne({
        where: {
          id: data.rolId,
        },
      });

    if (!rol) {
      throw new NotFoundException(
        'El rol no existe',
      );
    }
  }

  Object.assign(item, data);

  return this.repo.save(item);
}

async remove(id: number) {

  const item = await this.findOne(id);

  await this.repo.remove(item);

  return {
    message: 'Registro eliminado',
  };
}
}
