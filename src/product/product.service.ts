import { Injectable } from '@nestjs/common';
import { FindProductDto } from './dto/find-product.dto';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  find(dto: FindProductDto) {
    console.log(dto);
    throw new Error('Method not implemented.');
  }
  delete(id: string) {
    console.log(id);
    throw new Error('Method not implemented.');
  }
  patch(id: string, dto: Product) {
    console.log(id);
    console.log(dto);
    throw new Error('Method not implemented.');
  }
  get(id: string) {
    console.log(id);
    throw new Error('Method not implemented.');
  }
  create(dto: Omit<Product, '_id'>) {
    console.log(dto);
    throw new Error('Method not implemented.');
  }
}
