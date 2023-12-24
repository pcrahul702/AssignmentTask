import { Module,MiddlewareConsumer, NestModule } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { Middleware } from './utility/Middleware/middleware';

@Module({
  imports: [ProductsModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Middleware).forRoutes('*');
  }
}
