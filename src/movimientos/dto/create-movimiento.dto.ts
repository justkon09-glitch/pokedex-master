import { IsString, IsOptional, IsInt, IsNumber, IsBoolean, IsEmail, IsDateString, Min, MinLength, MaxLength, Max } from 'class-validator';

export class CreateMovimientoDto {

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  nombre: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  descripcion?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(250)
  potencia?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(100)
  precision?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(50)
  pp?: number;

  @IsInt()
  @Min(1)
  tipoId: number;

  @IsInt()
  @Min(1)
  tipoDanoId: number;
}