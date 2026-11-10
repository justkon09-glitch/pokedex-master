import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habitat } from './entities/habitat.entity.js';
import { HabitatService } from './habitat.service.js';
import { HabitatController } from './habitat.controller.js';
@Module({
  imports:[TypeOrmModule.forFeature([Habitat])],
  controllers:[HabitatController],
  providers:[HabitatService],
  exports:[HabitatService]
})
export class HabitatModule {}
