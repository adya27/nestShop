import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPage, TopPageDocument } from './top-page.model';

@Injectable()
export class TopPageService {
  constructor(
    @InjectModel('TopPage')
    private readonly topPageModel: Model<TopPageDocument>,
  ) {}

  delete(id: string) {
    throw new Error('Method not implemented.');
  }
  find(dto: FindTopPageDto) {
    throw new Error('Method not implemented.');
  }
  patch(id: string, dto: TopPage) {
    throw new Error('Method not implemented.');
  }
  get(id: string): Promise<TopPageDocument> {
    return this.topPageModel.findById(id).exec();
  }
  create(dto: TopPage) {
    throw new Error('Method not implemented.');
  }
}
