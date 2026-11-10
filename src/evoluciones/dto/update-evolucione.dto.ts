import { PartialType } from '@nestjs/mapped-types';
import { CreateEvolucionDto } from './create-evolucione.dto.js';

export class UpdateEvolucioneDto extends PartialType(CreateEvolucionDto) {}
