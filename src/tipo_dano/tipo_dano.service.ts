import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoDano } from './entities/tipo_dano.entity.js';
import { CreateTipoDanoDto } from './dto/create-tipo_dano.dto.js';
import { Movimiento } from '../movimientos/entities/movimiento.entity.js';

@Injectable()
export class TipoDanoService {
  
 constructor(
  @InjectRepository(TipoDano) private repo:Repository<TipoDano>) 
  {}
  @InjectRepository(Movimiento)
private movimientoRepo: Repository<Movimiento>

async create(createTipoDanoDto: CreateTipoDanoDto) {

  const existe = await this.repo.findOne({
    where: {
      nombre: createTipoDanoDto.nombre,
    },
  });

  if (existe) {
    throw new BadRequestException(
      'Ya existe un tipo de daño con ese nombre',
    );
  }

  const item = this.repo.create(createTipoDanoDto);

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
  data: Partial<TipoDano>,
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
        'Ya existe un tipo de daño con ese nombre',
      );
    }
  }

  Object.assign(item, data);

  return this.repo.save(item);
}

async remove(id: number) {

  const item = await this.findOne(id);

  const movimientos = await this.movimientoRepo.find({
    where: {
      tipoDanoId: id,
    },
  });

  if (movimientos.length > 0) {
    throw new BadRequestException(
      'No se puede eliminar porque hay movimientos asociados',
    );
  }

  await this.repo.remove(item);

  return {
    message: 'Registro eliminado',
  };
}

}
