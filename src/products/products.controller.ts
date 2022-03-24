import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/products.dto';
import { ProductsService } from './products.service';

@Controller('/products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<any> {
    const data = await this.productsService.getAll();
    return {
      code: 200,
      data: data,
      msg: '',
    };
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<any> {
    const res = await this.productsService.getProductById(id);
    if (res.isSuccess) {
      return {
        code: 200,
        data: res.data,
        msg: 'Successful',
      };
    }
    return {
      code: 1,
      data: null,
      msg: '',
    };
  }

  @Post('add')
  async postAddProduct(@Body() productInfo: CreateProductDto): Promise<any> {
    const product = await this.productsService.createProduct(productInfo);
    if (product.isSuccess) {
      return {
        code: 200,
        data: product.data,
        msg: '',
      };
    }
    return {
      code: 0,
      data: null,
      msg: '',
    };
  }

  @Post('delete')
  async postDeleteProduct(@Body() productId: number): Promise<any> {
    const res = await this.productsService.removeProduct(productId);
    if (res.isSuccess) {
      return {
        code: 200,
        data: res.data,
        msg: 'Delete successful',
      };
    }
    return {
      code: 0,
      data: null,
      msg: '',
    };
  }
}
