import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimiento } from './entities/movimiento.entity.js';
import { MovimientoService } from './movimientos.service.js';
import { MovimientoController } from './movimientos.controller.js';
@Module({
  imports:[TypeOrmModule.forFeature([Movimiento])],
  controllers:[MovimientoController],
  providers:[MovimientoService],
  exports:[MovimientoService]
})
export class MovimientoModule {}
