import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tipo } from './entities/tipo.entity.js';
import { TipoService } from './tipos.service.js';
import { TipoController } from './tipos.controller.js';

@Module({
  imports:[TypeOrmModule.forFeature([Tipo])],
  controllers:[TipoController],
  providers:[TipoService],
  exports:[TipoService]
})

export class TipoModule {}
