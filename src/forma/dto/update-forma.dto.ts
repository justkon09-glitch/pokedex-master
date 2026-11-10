import { PartialType } from '@nestjs/mapped-types';
import { CreateFormaDto } from './create-forma.dto.js';

export class UpdateFormaDto extends PartialType(CreateFormaDto) {}
