import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { PokemonService } from './pokemon.service.js';
import { CreatePokemonDto } from './dto/create-pokemon.dto.js';

@Controller('pokemon')
export class PokemonController {
 constructor(private service:PokemonService) {}
 
 @Post() 
 create(@Body() dto:CreatePokemonDto) {
   return this.service.create(dto as any); 
 }

 @Get() 
 findAll() {
   return this.service.findAll(); 

 }

 @Get(':id') 
 findOne(@Param('id',ParseIntPipe) id:number) {
   return this.service.findOne(id); 
  }

 @Patch(':id') 
 update(@Param('id',ParseIntPipe) id:number,@Body() dto:Partial<CreatePokemonDto>) {
   return this.service.update(id,dto as any); 
  }

 @Delete(':id') 
 remove(@Param('id',ParseIntPipe) id:number) {
   return this.service.remove(id); 
  }
}

