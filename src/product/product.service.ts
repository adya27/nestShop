import { Injectable } from '@nestjs/common';
import { ProductModel } from './product.model';

@Injectable()
export class ProductService {
  delete(id: string) {
    console.log(id);
    throw new Error('Method not implemented.');
  }
  patch(id: string) {
    console.log(id);
    throw new Error('Method not implemented.');
  }
  get(id: string) {
    console.log(id);
    throw new Error('Method not implemented.');
  }
  create(dto: Omit<ProductModel, '_id'>) {
    console.log(dto);
    throw new Error('Method not implemented.');
  }
}
