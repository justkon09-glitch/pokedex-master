import { Injectable, NotFoundException,BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movimiento } from './entities/movimiento.entity.js';
import { CreateMovimientoDto } from './dto/create-movimiento.dto.js';
import { Tipo } from '../tipos/entities/tipo.entity.js';
import { TipoDano } from '../tipo_dano/entities/tipo_dano.entity.js';

@Injectable()
export class MovimientoService {
 constructor(
  @InjectRepository(Movimiento)
  private repo: Repository<Movimiento>,

  @InjectRepository(Tipo)
  private tipoRepo: Repository<Tipo>,

  @InjectRepository(TipoDano)
  private tipoDanoRepo: Repository<TipoDano>,
) {}

async create(
  createMovimientoDto: CreateMovimientoDto,
) {

  const existe = await this.repo.findOne({
    where: {
      nombre: createMovimientoDto.nombre,
    },
  });

  if (existe) {
    throw new BadRequestException(
      'Ya existe un movimiento con ese nombre',
    );
  }

  const tipo = await this.tipoRepo.findOne({
    where: {
      id: createMovimientoDto.tipoId,
    },
  });

  if (!tipo) {
    throw new NotFoundException(
      'El tipo no existe',
    );
  }

  const tipoDano = await this.tipoDanoRepo.findOne({
    where: {
      id: createMovimientoDto.tipoDanoId,
    },
  });

  if (!tipoDano) {
    throw new NotFoundException(
      'El tipo de daño no existe',
    );
  }

  const item = this.repo.create(
    createMovimientoDto,
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
  data: Partial<Movimiento>,
) {

  const item = await this.findOne(id);

  if (data.nombre) {

    const existe = await this.repo.findOne({
      where: {
        nombre: data.nombre,
      },
    });

    if (existe && existe.id !== id) {
      throw new BadRequestException(
        'Ya existe un movimiento con ese nombre',
      );
    }
  }

  if (data.tipoId) {

    const tipo = await this.tipoRepo.findOne({
      where: {
        id: data.tipoId,
      },
    });

    if (!tipo) {
      throw new NotFoundException(
        'El tipo no existe',
      );
    }
  }

  if (data.tipoDanoId) {

    const tipoDano = await this.tipoDanoRepo.findOne({
      where: {
        id: data.tipoDanoId,
      },
    });

    if (!tipoDano) {
      throw new NotFoundException(
        'El tipo de daño no existe',
      );
    }
  }

  Object.assign(item, data);

  return this.repo.save(item);
}

 async remove(id:number) { 
  const item=await this.findOne(id); 
  await this.repo.remove(item); 
  return {message:'Registro eliminado'}; 
}

}
