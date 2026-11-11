import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { EstadisticaBaseService } from './estadisticas-base.service.js';
import { CreateEstadisticaBaseDto } from './dto/create-estadisticas-base.dto.js';
@Controller('estadisticas-base')
export class EstadisticaBaseController {
 constructor(private service:EstadisticaBaseService) {}

  @Post()
  create(
    @Body()
    createEstadisticaBaseDto: CreateEstadisticaBaseDto,
  ) {
    return this.service.create(
      createEstadisticaBaseDto,
    );
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
    @Param('id', ParseIntPipe)
    id: number,

    @Body()
    dto: Partial<CreateEstadisticaBaseDto>,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.service.remove(id);
  }
}