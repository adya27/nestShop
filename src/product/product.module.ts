import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductSchema } from './product.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    MongooseModule.forFeature([{ schema: ProductSchema, name: 'Product' }]),
  ],
})
export class ProductModule {}
