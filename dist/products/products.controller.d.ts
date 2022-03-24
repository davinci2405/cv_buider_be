import { CreateProductDto } from './dto/products.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<any>;
    findById(id: number): Promise<any>;
    postAddProduct(productInfo: CreateProductDto): Promise<any>;
    postDeleteProduct(productId: number): Promise<any>;
}
