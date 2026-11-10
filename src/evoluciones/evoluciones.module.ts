import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evolucion } from './entities/evolucione.entity.js';
import { EvolucionService } from './evoluciones.service.js';
import { EvolucionController } from './evoluciones.controller.js';

@Module({
  imports:[TypeOrmModule.forFeature([Evolucion])],
  controllers:[EvolucionController],
  providers:[EvolucionService],
  exports:[EvolucionService]
})
export class EvolucionModule {}
