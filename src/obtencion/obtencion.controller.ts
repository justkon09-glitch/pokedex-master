import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ObtencionService } from './obtencion.service.js';
import { CreateObtencionDto } from './dto/create-obtencion.dto.js';
@Controller('obtenciones')
export class ObtencionController {
 constructor(private service:ObtencionService) {}
 @Post() 
 create(@Body() dto:CreateObtencionDto) { 
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
 update(@Param('id',ParseIntPipe) id:number,@Body() dto:Partial<CreateObtencionDto>) { 
  return this.service.update(id,dto as any); 
}

 @Delete(':id') 
 remove(@Param('id',ParseIntPipe) id:number) { 
  return this.service.remove(id); 
}

}
