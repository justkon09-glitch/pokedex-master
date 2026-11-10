import { PartialType } from '@nestjs/mapped-types';
import { CreateEntrenadorDto } from './create-entrenador.dto.js';

export class UpdateEntrenadorDto extends PartialType(CreateEntrenadorDto) {}
