import { Injectable, NotFoundException, BadRequestException, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tipo } from './entities/tipo.entity.js';
import { CreateTipoDto } from './dto/create-tipo.dto.js';


@Injectable()
export class TipoService {
 constructor(
  @InjectRepository(Tipo) private repo:Repository<Tipo>
) {}

async create(createTipoDto: CreateTipoDto) {

  const existe = await this.repo.findOne({
    where: {
      nombre: createTipoDto.nombre,
    },
  });

  if (existe) {
    throw new BadRequestException(
      'Ya existe un tipo con ese nombre',
    );
  }

  const item = this.repo.create(createTipoDto);

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
  data: Partial<Tipo>,
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
        'Ya existe un tipo con ese nombre',
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
