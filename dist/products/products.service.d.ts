import { Model } from 'mongoose';
import { CreateProductDto } from './dto/products.dto';
import { Products } from './products.schema';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<Products>);
    getAll(): Promise<Products[]>;
    getProductById(id: number): Promise<any>;
    createProduct(productInfo: CreateProductDto): Promise<any>;
    removeProduct(id: number): Promise<any>;
}
