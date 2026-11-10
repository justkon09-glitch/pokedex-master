import { IsString, IsOptional, IsInt, IsNumber, IsBoolean, IsEmail, IsDateString, Min, MinLength } from 'class-validator';

export class CreateFormaDto {
 @IsNumber()
 @Min(0)
 pokemonId: number;
 @IsString()
 @MinLength(1)
 nombre: string;
 @IsOptional()
 @IsString()
 @MinLength(1)
 descripcion?: string;
 @IsBoolean()
 esRegional: boolean;
}
