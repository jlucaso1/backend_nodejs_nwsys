import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  preco: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  imagembase64: string;
}
