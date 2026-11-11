import { IsString, IsOptional, IsInt, IsNumber, IsBoolean, IsEmail, IsDateString, Min, MinLength, IsIn } from 'class-validator';

export class CreateTipoDanoDto {

  @IsString()
  @IsIn([
    'Físico',
    'Especial',
    'Estado',
  ])
  nombre: string;
}
