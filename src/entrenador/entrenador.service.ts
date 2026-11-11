import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entrenador } from './entities/entrenador.entity.js';
import { Region } from '../region/entities/region.entity.js';
import { Usuario } from '../usuario/entities/usuario.entity.js';
import { CreateEntrenadorDto } from './dto/create-entrenador.dto.js';

@Injectable()
export class EntrenadorService {
 constructor(
  @InjectRepository(Entrenador) private repo:Repository<Entrenador>,

  @InjectRepository(Usuario)
  private usuarioRepo: Repository<Usuario>,

  @InjectRepository(Region)
  private regionRepo: Repository<Region>,
) {}

async create(
  createEntrenadorDto: CreateEntrenadorDto,
) {

  const usuario = await this.usuarioRepo.findOne({
    where: {
      id: createEntrenadorDto.usuarioId,
    },
  });

  if (!usuario) {
    throw new NotFoundException(
      'El usuario no existe',
    );
  }

  const existeUsuario = await this.repo.findOne({
    where: {
      usuarioId: createEntrenadorDto.usuarioId,
    },
  });

  if (existeUsuario) {
    throw new BadRequestException(
      'Este usuario ya tiene un entrenador asociado',
    );
  }

  if (createEntrenadorDto.regionId) {

    const region = await this.regionRepo.findOne({
      where: {
        id: createEntrenadorDto.regionId,
      },
    });

    if (!region) {
      throw new NotFoundException(
        'La región no existe',
      );
    }
  }

  const item = this.repo.create(
    createEntrenadorDto,
  );

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
  data: Partial<Entrenador>,
) {

  const item = await this.findOne(id);

  if (data.usuarioId) {

    const usuario = await this.usuarioRepo.findOne({
      where: {
        id: data.usuarioId,
      },
    });

    if (!usuario) {
      throw new NotFoundException(
        'El usuario no existe',
      );
    }

    const existeUsuario = await this.repo.findOne({
      where: {
        usuarioId: data.usuarioId,
      },
    });

    if (
      existeUsuario &&
      existeUsuario.id !== id
    ) {
      throw new BadRequestException(
        'Este usuario ya tiene un entrenador asociado',
      );
    }
  }

  if (data.regionId) {

    const region = await this.regionRepo.findOne({
      where: {
        id: data.regionId,
      },
    });

    if (!region) {
      throw new NotFoundException(
        'La región no existe',
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
