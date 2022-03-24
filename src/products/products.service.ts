import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/products.dto';
import { ProductsEntity } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsEntity)
    private productRepository: Repository<ProductsEntity>
  ) {}

  async getAll(): Promise<ProductsEntity[]> {
    return await this.productRepository.find({});
  }

  async getProductById(id: number): Promise<any> {
    try {
      const product = await this.productRepository.findOne(id);
      if (product) {
        return {
          isSuccess: true,
          data: product,
        };
      }
    } catch (e) {
      console.log(e);
    }
    return {
      isSuccess: false,
      data: null,
    };
  }

  async createProduct(productInfo: CreateProductDto): Promise<any> {
    try {
      let product = new ProductsEntity();
      product = this.productRepository.create(productInfo);
      const response = await this.productRepository.save(product);
      return {
        isSuccess: true,
        data: response,
      };
    } catch (e) {
      console.log(e);
    }
    return {
      isSuccess: false,
      data: null,
    };
  }

  async removeProduct(id: number): Promise<any> {
    const product = await this.productRepository.findOne(id);
    if (product) {
      try {
        await this.productRepository.delete(id);
        return {
          isSuccess: true,
          data: null,
        };
      } catch (e) {
        console.log(e);
      }
    }
    return {
      isSuccess: false,
      data: null,
    };
  }
}
