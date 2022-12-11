import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TopPageController } from './top-page.controller';
import { TopPageSchema } from './top-page.model';
import { TopPageService } from './top-page.service';

@Module({
  controllers: [TopPageController],
  providers: [TopPageService],
  imports: [
    MongooseModule.forFeature([
      {
        schema: TopPageSchema,
        name: 'TopPage',
      },
    ]),
  ],
})
export class TopPageModule {}
