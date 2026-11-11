import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Habilidad } from './entities/habilidade.entity.js';
import { CreateHabilidadDto } from './dto/create-habilidade.dto.js';

@Injectable()
export class HabilidadService {
 constructor(
  @InjectRepository(Habilidad) private repo:Repository<Habilidad>
) {}

async create(createHabilidadDto: CreateHabilidadDto) {

  const existe = await this.repo.findOne({
    where: {
      nombre: createHabilidadDto.nombre,
    },
  });

  if (existe) {
    throw new BadRequestException(
      'Ya existe una habilidad con ese nombre',
    );
  }

  const item = this.repo.create(createHabilidadDto);

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
  data: Partial<Habilidad>,
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
        'Ya existe una habilidad con ese nombre',
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
