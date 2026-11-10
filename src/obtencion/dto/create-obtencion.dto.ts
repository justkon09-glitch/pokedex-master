import { IsString, IsOptional, IsInt, IsNumber, IsBoolean, IsEmail, IsDateString, Min, MinLength } from 'class-validator';

export class CreateObtencionDto {
 @IsNumber()
 @Min(0)
 entrenadorId: number;
 @IsNumber()
 @Min(0)
 pokemonId: number;
 @IsDateString()
 fechaObtencion: Date;
 @IsString()
 @MinLength(1)
 metodo: string;
 @IsOptional()
 @IsString()
 @MinLength(1)
 apodo?: string;
 @IsNumber()
 @Min(0)
 nivel: number;
}
