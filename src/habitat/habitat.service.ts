import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Habitat } from './entities/habitat.entity.js';
import { CreateHabitatDto } from './dto/create-habitat.dto.js';
@Injectable()
export class HabitatService {
 constructor(
  @InjectRepository(Habitat) private repo:Repository<Habitat>
) {}
async create(createHabitatDto: CreateHabitatDto) {

  const existe = await this.repo.findOne({
    where: {
      nombre: createHabitatDto.nombre,
    },
  });

  if (existe) {
    throw new BadRequestException(
      'Ya existe un hábitat con ese nombre',
    );
  }

  const item = this.repo.create(createHabitatDto);

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
  data: Partial<Habitat>,
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
        'Ya existe un hábitat con ese nombre',
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
