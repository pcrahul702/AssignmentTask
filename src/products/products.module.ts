import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/Dto/products.dto';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService,CreateProductDto]
})
export class ProductsModule {}
