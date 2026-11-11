import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstadisticaBase } from './entities/estadisticas-base.entity.js';
import { CreateEstadisticaBaseDto } from './dto/create-estadisticas-base.dto.js';
import { Pokemon } from '../pokemon/entities/pokemon.entity.js';

@Injectable()
export class EstadisticaBaseService {
 constructor(
  @InjectRepository(EstadisticaBase) private repo:Repository<EstadisticaBase>,

  @InjectRepository(Pokemon) private pokemonRepo:Repository<Pokemon>
) {}


async create(
    createEstadisticaBaseDto: CreateEstadisticaBaseDto,
  ) {

    const pokemon = await this.pokemonRepo.findOne({
      where: {
        id: createEstadisticaBaseDto.pokemonId,
      },
    });

    if (!pokemon) {
      throw new NotFoundException(
        'El Pokémon no existe',
      );
    }

    const existe = await this.repo.findOne({
      where: {
        pokemonId: createEstadisticaBaseDto.pokemonId,
      },
    });

    if (existe) {
      throw new BadRequestException(
        'Este Pokémon ya tiene estadísticas base registradas',
      );
    }

    const item = this.repo.create(
      createEstadisticaBaseDto,
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

 async update(id:number,data:Partial<EstadisticaBase>) { 
  const item=await this.findOne(id); 
  Object.assign(item,data); 
  return this.repo.save(item); 
}

 async remove(id:number) { 
  const item=await this.findOne(id); 
  await this.repo.remove(item); 
  return {message:'Registro eliminado'}; 
}
}
