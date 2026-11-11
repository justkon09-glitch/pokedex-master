import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { RegionService } from './region.service.js';
import { CreateRegionDto } from './dto/create-region.dto.js';
@Controller('regiones')
export class RegionController {
 constructor(private service:RegionService) {}

  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.service.create(createRegionDto);
  }

 @Get() findAll() { 
  return this.service.findAll(); 
}

 @Get(':id') 
 findOne(@Param('id',ParseIntPipe) id:number) { 
  return this.service.findOne(id); 
}

 @Patch(':id') 
 update(@Param('id',ParseIntPipe) id:number,@Body() dto:Partial<CreateRegionDto>) { 
  return this.service.update(id,dto as any); 
}

 @Delete(':id') 
 remove(@Param('id',ParseIntPipe) id:number) { 
  return this.service.remove(id); 
}

}
