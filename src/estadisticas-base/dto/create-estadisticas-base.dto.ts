import { IsString, IsOptional, IsInt, IsNumber, IsBoolean, IsEmail, IsDateString, Min, MinLength,Max } from 'class-validator';

export class CreateEstadisticaBaseDto {

  @IsInt()
  @Min(1)
  pokemonId: number;

  @IsInt()
  @Min(1)
  @Max(255)
  hp: number;

  @IsInt()
  @Min(1)
  @Max(255)
  ataque: number;

  @IsInt()
  @Min(1)
  @Max(255)
  defensa: number;

  @IsInt()
  @Min(1)
  @Max(255)
  ataqueEspecial: number;

  @IsInt()
  @Min(1)
  @Max(255)
  defensaEspecial: number;

  @IsInt()
  @Min(1)
  @Max(255)
  velocidad: number;
}