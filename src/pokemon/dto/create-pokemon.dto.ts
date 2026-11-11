import { IsString, IsOptional, IsInt, IsNumber, IsBoolean, IsEmail, IsDateString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {

 @IsInt()
 @Min(0)
 numeroPokedex: number;

 @IsString()
 @MinLength(1)
 nombre: string;

 @IsOptional()
 @IsString()
 @MinLength(1)
 descripcion?: string;

 @IsNumber()
 @Min(0)
 altura: number;

 @IsNumber()
 @Min(0)
 peso: number;

 @IsInt()
 @Min(0)
 tipoPrimarioId: number;

 @IsOptional()
 @IsInt()
 @Min(0)
 tipoSecundarioId?: number;

 @IsInt()
 @Min(0)
 habilidadId: number;

 @IsOptional()
 @IsInt()
 @Min(0)
 regionId?: number;

 @IsOptional()
 @IsInt()
 @Min(0)
 habitatId?: number;
 
 @IsOptional()
 @IsInt()
 @Min(0)
 grupoHuevoId?: number;
}
