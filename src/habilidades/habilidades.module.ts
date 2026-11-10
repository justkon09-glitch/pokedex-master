import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habilidad } from './entities/habilidade.entity.js';
import { HabilidadService } from './habilidades.service.js';
import { HabilidadController } from './habilidades.controller.js';
@Module({
  imports:[TypeOrmModule.forFeature([Habilidad])],
  controllers:[HabilidadController],
  providers:[HabilidadService],
  exports:[HabilidadService]
})
export class HabilidadModule {}
