import { IsString, IsOptional, IsInt, IsNumber, IsBoolean, IsEmail, IsDateString, Min, MinLength } from 'class-validator';

export class CreateUsuarioDto {
 @IsString()
 @MinLength(1)
 nombreUsuario: string;
 @IsEmail()
 correo: string;
 @IsString()
 @MinLength(1)
 password: string;
 @IsNumber()
 @Min(0)
 rolId: number;
}
