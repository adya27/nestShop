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
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPage } from './top-page.model';
import { TopPageService } from './top-page.service';

@Controller('top-page')
export class TopPageController {
  constructor(private readonly topPageService: TopPageService) {}

  @Post('create')
  async create(@Body() dto: Omit<TopPage, '_id'>) {
    return this.topPageService.create(dto);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.topPageService.get(id);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TopPage) {
    return this.topPageService.patch(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.topPageService.delete(id);
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto) {
    return this.topPageService.find(dto);
  }
}
