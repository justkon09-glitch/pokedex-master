import { IsString, IsOptional, IsInt, IsNumber, IsBoolean, IsEmail, IsDateString, Min, MinLength } from 'class-validator';

export class CreateBatallaDto {
 @IsNumber()
 @Min(0)
 entrenadorLocalId: number;
 @IsNumber()
 @Min(0)
 entrenadorVisitanteId: number;
 @IsOptional()
 @IsNumber()
 @Min(0)
 ganadorId?: number;
 @IsDateString()
 fecha: Date;
 @IsOptional()
 @IsString()
 @MinLength(1)
 resultado?: string;
 @IsOptional()
 @IsString()
 @MinLength(1)
 lugar?: string;
}
