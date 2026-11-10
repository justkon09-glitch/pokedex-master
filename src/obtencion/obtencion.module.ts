import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Obtencion } from './entities/obtencion.entity.js';
import { ObtencionService } from './obtencion.service.js';
import { ObtencionController } from './obtencion.controller.js';
@Module({
  imports:[TypeOrmModule.forFeature([Obtencion])],
  controllers:[ObtencionController],
  providers:[ObtencionService],
  exports:[ObtencionService]
})
export class ObtencionModule {}
