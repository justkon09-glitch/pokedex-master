import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entrenador } from './entities/entrenador.entity.js';
import { EntrenadorService } from './entrenador.service.js';
import { EntrenadorController } from './entrenador.controller.js';
@Module({
  imports:[TypeOrmModule.forFeature([Entrenador])],
  controllers:[EntrenadorController],
  providers:[EntrenadorService],
  exports:[EntrenadorService]
})
export class EntrenadorModule {}
