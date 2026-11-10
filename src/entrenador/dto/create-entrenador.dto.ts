import { IsString, IsOptional, IsInt, IsNumber, IsBoolean, IsEmail, IsDateString, Min, MinLength } from 'class-validator';

export class CreateEntrenadorDto {
 @IsNumber()
 @Min(0)
 usuarioId: number;
 @IsString()
 @MinLength(1)
 nombre: string;
 @IsOptional()
 @IsNumber()
 @Min(0)
 edad?: number;
 @IsOptional()
 @IsNumber()
 @Min(0)
 regionId?: number;
}
