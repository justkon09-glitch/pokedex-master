import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Forma } from './entities/forma.entity.js';
import { FormaService } from './forma.service.js';
import { FormaController } from './forma.controller.js';
@Module({
  imports:[TypeOrmModule.forFeature([Forma])],
  controllers:[FormaController],
  providers:[FormaService],
  exports:[FormaService]})
export class FormaModule {}
