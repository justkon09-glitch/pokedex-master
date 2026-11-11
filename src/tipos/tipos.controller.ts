import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TipoService } from './tipos.service.js';
import { CreateTipoDto } from './dto/create-tipo.dto.js';
import { UpdateTipoDto } from './dto/update-tipo.dto.js';
@Controller('tipos')
export class TipoController {
 constructor(private service:TipoService) {}
@Post()
create(@Body() createTipoDto: CreateTipoDto) {
  return this.service.create(createTipoDto);
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
update(
  @Param('id', ParseIntPipe) id: number,
  @Body() updateTipoDto: UpdateTipoDto,
) {
  return this.service.update(id, updateTipoDto);
}

 @Delete(':id') 
 remove(@Param('id',ParseIntPipe) id:number) { 
  return this.service.remove(id); 
}
}
