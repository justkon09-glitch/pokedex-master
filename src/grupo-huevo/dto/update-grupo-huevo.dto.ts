import { PartialType } from '@nestjs/mapped-types';
import { CreateGrupoHuevoDto } from './create-grupo-huevo.dto.js';

export class UpdateGrupoHuevoDto extends PartialType(CreateGrupoHuevoDto) {}
