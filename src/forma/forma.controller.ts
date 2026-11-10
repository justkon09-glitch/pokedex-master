import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { FormaService } from './forma.service.js';
import { CreateFormaDto } from './dto/create-forma.dto.js';

@Controller('formas')
export class FormaController {
 constructor(private service:FormaService) {}
 @Post() 
 create(@Body() dto:CreateFormaDto) { 
  return this.service.create(dto as any); 
}

 @Get() findAll() { 
  return this.service.findAll(); 
}

 @Get(':id') 
 findOne(@Param('id',ParseIntPipe) id:number) { 
  return this.service.findOne(id); 
}

@Patch(':id') 
update(@Param('id',ParseIntPipe) id:number,@Body() dto:Partial<CreateFormaDto>) { 
  return this.service.update(id,dto as any); 
}

 @Delete(':id') 
 remove(@Param('id',ParseIntPipe) id:number) { 
  return this.service.remove(id); 
}
}
