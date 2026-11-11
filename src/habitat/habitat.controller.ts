import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { HabitatService } from './habitat.service.js';
import { CreateHabitatDto } from './dto/create-habitat.dto.js';
@Controller('habitats')
export class HabitatController {
 constructor(private service:HabitatService) {}
 @Post()
create(@Body() createHabitatDto: CreateHabitatDto) {
  return this.service.create(createHabitatDto);
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
 update(@Param('id',ParseIntPipe) id:number,@Body() dto:Partial<CreateHabitatDto>) { 
  return this.service.update(id,dto as any); 
}

 @Delete(':id') 
 remove(@Param('id',ParseIntPipe) id:number) { 
  return this.service.remove(id); 
}

}
