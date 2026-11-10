import { IsString, IsOptional, IsInt, IsNumber, IsBoolean, IsEmail, IsDateString, Min, MinLength } from 'class-validator';

export class CreateTipoDanoDto {
 @IsString()
 @MinLength(1)
 nombre: string;
 @IsOptional()
 @IsString()
 @MinLength(1)
 categoria?: string;
}
