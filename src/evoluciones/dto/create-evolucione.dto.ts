import { IsString, IsOptional, IsInt, IsNumber, IsBoolean, IsEmail, IsDateString, Min, MinLength } from 'class-validator';

export class CreateEvolucionDto {
 @IsNumber()
 @Min(0)
 pokemonOrigenId: number;
 @IsNumber()
 @Min(0)
 pokemonDestinoId: number;
 @IsOptional()
 @IsNumber()
 @Min(0)
 nivelRequerido?: number;
 @IsOptional()
 @IsString()
 @MinLength(1)
 condicion?: string;
}
