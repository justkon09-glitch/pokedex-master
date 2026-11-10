import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity.js';
import { PokemonService } from './pokemon.service.js';
import { PokemonController } from './pokemon.controller.js';

@Module({
  imports:[TypeOrmModule.forFeature([Pokemon])],
  controllers:[PokemonController],
  providers:[PokemonService],
  exports:[PokemonService]
})
export class PokemonModule {}
