import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/products.dto';
import { Products } from './products.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Products') private productModel: Model<Products>) {}

  async getAll(): Promise<Products[]> {
    return await this.productModel.find().exec();
  }

  async getProductById(id: number): Promise<any> {
    try {
      const product = await this.productModel.findById(id).exec();
      if (product) {
        return {
          isSuccess: true,
          data: product,
        };
      }
      return {
        isSuccess: false,
        data: null,
      };
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
      const product = new this.productModel(productInfo);
      const response = await product.save();
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
    const product = await this.productModel.findById(id);
    if (product) {
      try {
        await this.productModel.findByIdAndDelete({ id: product.id });
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
