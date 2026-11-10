import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity.js';

@Injectable()
export class PokemonService {
  
 constructor(
  @InjectRepository(Pokemon) private repo:Repository<Pokemon>
) {}

 create(data:Partial<Pokemon>) {
   const item=this.repo.create(data); 
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

 async update(id:number,data:Partial<Pokemon>) {
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
