import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review } from './review.model';
import { CreateReviewDto } from './dto/create.review.dto';

@Injectable()
export class ReviewService {
  constructor(@InjectModel('Review') private readonly review: Model<Review>) {}
  async create(dto: CreateReviewDto): Promise<Review> {
    return this.review.create(dto);
  }
  async delete(id: string): Promise<Review | null> {
    return this.review.findByIdAndDelete(id).exec();
  }
  async deleteAllByProductId(productId: string) {
    return this.review.deleteMany({ productId: productId }).exec();
  }
  async getByProduct(productId: string): Promise<Review[]> {
    return this.review.find({ productId: productId }).exec();
  }
}
