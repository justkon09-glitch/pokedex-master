import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TipoDanoService } from './tipo_dano.service.js';
import { CreateTipoDanoDto } from './dto/create-tipo_dano.dto.js';
@Controller('tipos-dano')
export class TipoDanoController {
 constructor(private service:TipoDanoService) {}

 @Post() 
 create(@Body() dto:CreateTipoDanoDto) {
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
 update(@Param('id',ParseIntPipe) id:number,@Body() dto:Partial<CreateTipoDanoDto>) {
   return this.service.update(id,dto as any); 
  }

 @Delete(':id') 
 remove(@Param('id',ParseIntPipe) id:number) {
   return this.service.remove(id); 
  }
}
