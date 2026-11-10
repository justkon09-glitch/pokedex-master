import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { HabilidadService } from './habilidades.service.js';
import { CreateHabilidadDto } from './dto/create-habilidade.dto.js';
@Controller('habilidades')
export class HabilidadController {
 constructor(private service:HabilidadService) {}

 @Post() 
 create(@Body() dto:CreateHabilidadDto) { 
  return this.service.create(dto as any); 
}

 @Get() 
 findAll() { return this.service.findAll(); 

 }

 @Get(':id') 
 findOne(@Param('id',ParseIntPipe) id:number) { 
  return this.service.findOne(id); }

 @Patch(':id') 
 update(@Param('id',ParseIntPipe) id:number,@Body() dto:Partial<CreateHabilidadDto>) { 
  return this.service.update(id,dto as any); 
}

 @Delete(':id') 
 remove(@Param('id',ParseIntPipe) id:number) {
   return this.service.remove(id); 
  }
}
