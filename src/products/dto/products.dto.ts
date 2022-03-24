import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNumber()
  price: number;

  @IsString()
  description: string;

  @IsString()
  category: string;

  @IsString()
  image: string;
}
