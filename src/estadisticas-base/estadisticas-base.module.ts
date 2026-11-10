import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadisticaBase } from './entities/estadisticas-base.entity.js';
import { EstadisticaBaseService } from './estadisticas-base.service.js';
import { EstadisticaBaseController } from './estadisticas-base.controller.js';
@Module({
  imports:[TypeOrmModule.forFeature([EstadisticaBase])],
  controllers:[EstadisticaBaseController],
  providers:[EstadisticaBaseService],
  exports:[EstadisticaBaseService]})
export class EstadisticaBaseModule {}
