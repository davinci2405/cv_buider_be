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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async getAll() {
        return await this.productModel.find().exec();
    }
    async getProductById(id) {
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
        }
        catch (e) {
            console.log(e);
        }
        return {
            isSuccess: false,
            data: null,
        };
    }
    async createProduct(productInfo) {
        try {
            const product = new this.productModel(productInfo);
            const response = await product.save();
            return {
                isSuccess: true,
                data: response,
            };
        }
        catch (e) {
            console.log(e);
        }
        return {
            isSuccess: false,
            data: null,
        };
    }
    async removeProduct(id) {
        const product = await this.productModel.findById(id);
        if (product) {
            try {
                await this.productModel.findByIdAndDelete({ id: product.id });
                return {
                    isSuccess: true,
                    data: null,
                };
            }
            catch (e) {
                console.log(e);
            }
        }
        return {
            isSuccess: false,
            data: null,
        };
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Products')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map