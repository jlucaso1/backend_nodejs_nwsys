import { IsBase64, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  preco: number;

  // @IsNotEmpty()
  // @IsBase64()
  // imagembase64: string;
}
