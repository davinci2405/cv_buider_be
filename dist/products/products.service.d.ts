import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/products.dto';
import { ProductsEntity } from './products.entity';
export declare class ProductsService {
    private productRepository;
    constructor(productRepository: Repository<ProductsEntity>);
    getAll(): Promise<ProductsEntity[]>;
    getProductById(id: number): Promise<any>;
    createProduct(productInfo: CreateProductDto): Promise<any>;
    removeProduct(id: number): Promise<any>;
}
