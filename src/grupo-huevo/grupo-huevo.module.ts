import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoHuevo } from './entities/grupo-huevo.entity.js';
import { GrupoHuevoService } from './grupo-huevo.service.js';
import { GrupoHuevoController } from './grupo-huevo.controller.js';
@Module({
  imports:[TypeOrmModule.forFeature([GrupoHuevo])],
  controllers:[GrupoHuevoController],
  providers:[GrupoHuevoService],
  exports:[GrupoHuevoService]
})
export class GrupoHuevoModule {}
