import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export class ProductCharacteristics {
  @Prop()
  name: string;

  @Prop()
  value: string;
}

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
  @Prop()
  _id: string;

  @Prop()
  image: string;

  @Prop()
  title: string;

  @Prop()
  price: number;

  @Prop()
  oldPrice: number;

  @Prop()
  credit: number;

  @Prop()
  calculatedRating: number;

  @Prop()
  description: string;
  @Prop()
  advantages: string;

  @Prop()
  disadvantages: string;

  @Prop({ type: () => [String] })
  categories: string[];

  @Prop({ type: () => [String] })
  tags: string[];

  @Prop({ type: () => [ProductCharacteristics], _id: false })
  characteristics: ProductCharacteristics[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
