import { Body, Controller, Delete, Get,Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/Dto/products.dto';

@Controller('/')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Get('/product')
    getProduct(): any {
        return this.productService.getProduct();
    }
    @Get('/product/:id')
    getoneProduct(@Param('id') id :number): any {
        return this.productService.getoneProduct(id);
    }
    @Post('/product')
       addproduct(@Body() createProductDto: CreateProductDto):any{
        return this.productService.addproduct(createProductDto)
    }
    @Delete('/product/:id')
    deleteProduct(@Param('id') id :number): any {
        return this.productService.deleteProduct(id);
    }
    @Put('/product/:id')
    updateProduct(@Body() createProductDto: CreateProductDto,@Param('id') id :number,){
        return this.productService.updateProduct(id,createProductDto)
    }
}
