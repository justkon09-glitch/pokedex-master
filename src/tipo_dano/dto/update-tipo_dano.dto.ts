import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoDanoDto } from './create-tipo_dano.dto.js';

export class UpdateTipoDanoDto extends PartialType(CreateTipoDanoDto) {}
