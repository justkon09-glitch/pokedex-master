import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity.js';
import { UsuarioService } from './usuario.service.js';
import { UsuarioController } from './usuario.controller.js';
@Module({
  imports:[TypeOrmModule.forFeature([Usuario])],
  controllers:[UsuarioController],
  providers:[UsuarioService],
  exports:[UsuarioService]
})
export class UsuarioModule {}
