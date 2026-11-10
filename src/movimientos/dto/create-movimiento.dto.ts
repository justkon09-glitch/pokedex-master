import { IsString, IsOptional, IsInt, IsNumber, IsBoolean, IsEmail, IsDateString, Min, MinLength } from 'class-validator';

export class CreateMovimientoDto {
 @IsString()
 @MinLength(1)
 nombre: string;
 @IsOptional()
 @IsString()
 @MinLength(1)
 descripcion?: string;
 @IsOptional()
 @IsNumber()
 @Min(0)
 potencia?: number;
 @IsOptional()
 @IsNumber()
 @Min(0)
 precision?: number;
 @IsOptional()
 @IsNumber()
 @Min(0)
 pp?: number;
 @IsNumber()
 @Min(0)
 tipoId: number;
 @IsNumber()
 @Min(0)
 tipoDanoId: number;
}
