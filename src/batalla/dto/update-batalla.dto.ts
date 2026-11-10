import { PartialType } from '@nestjs/mapped-types';
import { CreateBatallaDto } from './create-batalla.dto.js';

export class UpdateBatallaDto extends PartialType(CreateBatallaDto) {}
