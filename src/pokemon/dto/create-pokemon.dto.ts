import { IsString, IsOptional, IsInt, IsNumber, IsBoolean, IsEmail, IsDateString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {

 @IsNumber()
 @Min(0)
 numeroPokedex: number;

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
 altura?: number;

 @IsOptional()
 @IsNumber()
 @Min(0)
 peso?: number;

 @IsNumber()
 @Min(0)
 tipoPrimarioId: number;

 @IsOptional()
 @IsNumber()
 @Min(0)
 tipoSecundarioId?: number;

 @IsOptional()
 @IsNumber()
 @Min(0)
 habilidadId?: number;

 @IsOptional()
 @IsNumber()
 @Min(0)
 regionId?: number;

 @IsOptional()
 @IsNumber()
 @Min(0)
 habitatId?: number;
 
 @IsOptional()
 @IsNumber()
 @Min(0)
 grupoHuevoId?: number;
}
