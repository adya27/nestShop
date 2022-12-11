import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { FindProductDto } from './dto/find-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  async create(@Body() dto: Omit<Product, '_id'>) {
    return this.productService.create(dto);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.productService.get(id);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: Product) {
    return this.productService.patch(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto) {
    return this.productService.find(dto);
  }
}
