import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { ReviewSchema } from './review.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService],
  imports: [
    MongooseModule.forFeature([
      {
        schema: ReviewSchema,
        name: 'Review',
      },
    ]),
  ],
})
export class ReviewModule {}
