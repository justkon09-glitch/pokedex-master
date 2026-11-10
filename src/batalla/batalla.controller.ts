import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BatallaService } from './batalla.service.js';
import { CreateBatallaDto } from './dto/create-batalla.dto.js';
import { UpdateBatallaDto } from './dto/update-batalla.dto.js';

@Controller('batalla')
export class BatallaController {
  constructor(private readonly batallaService: BatallaService) {}

  @Post()
  create(@Body() createBatallaDto: CreateBatallaDto) {
    return this.batallaService.create(createBatallaDto);
  }

  @Get()
  findAll() {
    return this.batallaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.batallaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBatallaDto: UpdateBatallaDto) {
    return this.batallaService.update(+id, updateBatallaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.batallaService.remove(+id);
  }
}
