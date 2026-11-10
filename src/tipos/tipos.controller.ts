import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TipoService } from './tipos.service.js';
import { CreateTipoDto } from './dto/create-tipo.dto.js';
@Controller('tipos')
export class TipoController {
 constructor(private service:TipoService) {}
 @Post() 
 create(@Body() dto:CreateTipoDto) { 
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
 update(@Param('id',ParseIntPipe) id:number,@Body() dto:Partial<CreateTipoDto>) { 
  return this.service.update(id,dto as any); 
}

 @Delete(':id') 
 remove(@Param('id',ParseIntPipe) id:number) { 
  return this.service.remove(id); 
}
}
