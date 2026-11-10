import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Batalla } from './entities/batalla.entity.js';
import { BatallaService } from './batalla.service.js';
import { BatallaController } from './batalla.controller.js';
@Module({
  imports:[TypeOrmModule.forFeature([Batalla])],
  controllers:[BatallaController],
  providers:[BatallaService],
  exports:[BatallaService]
})
export class BatallaModule {}
