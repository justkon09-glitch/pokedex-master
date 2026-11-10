import { PartialType } from '@nestjs/mapped-types';
import { CreateHabilidadDto } from './create-habilidade.dto.js';

export class UpdateHabilidadeDto extends PartialType(CreateHabilidadDto) {}
