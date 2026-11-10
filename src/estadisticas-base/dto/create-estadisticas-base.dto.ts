import { IsString, IsOptional, IsInt, IsNumber, IsBoolean, IsEmail, IsDateString, Min, MinLength } from 'class-validator';

export class CreateEstadisticaBaseDto {
 @IsNumber()
 @Min(0)
 pokemonId: number;
 @IsNumber()
 @Min(0)
 hp: number;
 @IsNumber()
 @Min(0)
 ataque: number;
 @IsNumber()
 @Min(0)
 defensa: number;
 @IsNumber()
 @Min(0)
 ataqueEspecial: number;
 @IsNumber()
 @Min(0)
 defensaEspecial: number;
 @IsNumber()
 @Min(0)
 velocidad: number;
}
