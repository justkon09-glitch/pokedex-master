import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { MovimientoService } from './movimientos.service.js';
import { CreateMovimientoDto } from './dto/create-movimiento.dto.js';
@Controller('movimientos')
export class MovimientoController {
 constructor(private service:MovimientoService) {}
 
 @Post() 
 create(@Body() dto:CreateMovimientoDto) { 
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
 update(@Param('id',ParseIntPipe) id:number,@Body() dto:Partial<CreateMovimientoDto>) { 
  return this.service.update(id,dto as any); 
}

 @Delete(':id') 
 remove(@Param('id',ParseIntPipe) id:number) { 
  return this.service.remove(id); 
}

}
