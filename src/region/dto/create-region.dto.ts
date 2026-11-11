import { IsString, IsOptional, IsInt, IsNumber, IsBoolean, IsEmail, IsDateString, Min, MinLength } from 'class-validator';

export class CreateRegionDto {
 @IsString()
 @MinLength(1)
 nombre: string;
 
 @IsOptional()
 @IsString()
 @MinLength(1)
 descripcion?: string;
}
