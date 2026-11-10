import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { EvolucionService } from './evoluciones.service.js';
import { CreateEvolucionDto } from './dto/create-evolucione.dto.js';

@Controller('evoluciones')
export class EvolucionController {
 constructor(private service:EvolucionService) {}

 @Post() 
 create(@Body() dto:CreateEvolucionDto) { 
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
  update(@Param('id',ParseIntPipe) id:number,@Body() dto:Partial<CreateEvolucionDto>) { 
    return this.service.update(id,dto as any); 
  }

 @Delete(':id') 
 remove(@Param('id',ParseIntPipe) id:number) { 
  return this.service.remove(id); 
}
}
