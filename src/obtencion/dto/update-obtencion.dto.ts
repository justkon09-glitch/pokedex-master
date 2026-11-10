import { PartialType } from '@nestjs/mapped-types';
import { CreateObtencionDto } from './create-obtencion.dto.js';

export class UpdateObtencionDto extends PartialType(CreateObtencionDto) {}
