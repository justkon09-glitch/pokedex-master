import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadisticaBaseDto } from './create-estadisticas-base.dto.js';

export class UpdateEstadisticasBaseDto extends PartialType(CreateEstadisticaBaseDto) {}
