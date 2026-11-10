import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoDano } from './entities/tipo_dano.entity.js';
import { TipoDanoService } from './tipo_dano.service.js';
import { TipoDanoController } from './tipo_dano.controller.js';

@Module({
  imports:[TypeOrmModule.forFeature([TipoDano])],
  controllers:[TipoDanoController],
  providers:[TipoDanoService],
  exports:[TipoDanoService]
})

export class TipoDanoModule {}
