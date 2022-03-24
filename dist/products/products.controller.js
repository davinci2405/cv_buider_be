"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_dto_1 = require("./dto/products.dto");
const products_service_1 = require("./products.service");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async findAll() {
        const data = await this.productsService.getAll();
        return {
            code: 200,
            data: data,
            msg: '',
        };
    }
    async findById(id) {
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
    async postAddProduct(productInfo) {
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
    async postDeleteProduct(productId) {
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
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [products_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "postAddProduct", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "postDeleteProduct", null);
ProductsController = __decorate([
    (0, common_1.Controller)('/products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map