import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity.js';
import { CreatePokemonDto } from './dto/create-pokemon.dto.js';

@Injectable()
export class PokemonService {
  
 constructor(
  @InjectRepository(Pokemon) private repo:Repository<Pokemon>
) {}

 async create(createPokemonDto: CreatePokemonDto) {

  const existeNumero = await this.repo.findOne({
    where: {
      numeroPokedex: createPokemonDto.numeroPokedex,
    },
  });

  if (existeNumero) {
    throw new BadRequestException(
      'Ya existe un Pokémon con ese número de Pokédex',
    );
  }

  const existeNombre = await this.repo.findOne({
    where: {
      nombre: createPokemonDto.nombre,
    },
  });

  if (existeNombre) {
    throw new BadRequestException(
      'Ya existe un Pokémon con ese nombre',
    );
  }

  if (
    createPokemonDto.tipoSecundarioId &&
    createPokemonDto.tipoPrimarioId === createPokemonDto.tipoSecundarioId
  ) {
    throw new BadRequestException(
      'El tipo secundario debe ser diferente al tipo primario',
    );
  }

  const item = this.repo.create(createPokemonDto);

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

 async update(id: number, data: Partial<Pokemon>) {

  const item = await this.findOne(id);

  if (data.numeroPokedex) {

    const existeNumero = await this.repo.findOne({
      where: {
        numeroPokedex: data.numeroPokedex,
      },
    });

    if (existeNumero && existeNumero.id !== id) {
      throw new BadRequestException(
        'Ya existe un Pokémon con ese número de Pokédex',
      );
    }
  }

  if (data.nombre) {

    const existeNombre = await this.repo.findOne({
      where: {
        nombre: data.nombre,
      },
    });

    if (existeNombre && existeNombre.id !== id) {
      throw new BadRequestException(
        'Ya existe un Pokémon con ese nombre',
      );
    }
  }

  if (
    data.tipoPrimarioId &&
    data.tipoSecundarioId &&
    data.tipoPrimarioId === data.tipoSecundarioId
  ) {
    throw new BadRequestException(
      'Los tipos no pueden ser iguales',
    );
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
