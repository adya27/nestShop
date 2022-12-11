import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Types } from 'mongoose';
import { TopPageService } from './top-page.service';

describe('MyService', () => {
  let service: TopPageService;
  const exec = { exec: jest.fn() };
  const topPageRepositoryFactory = () => ({
    findById: () => exec,
  });
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TopPageService,
        {
          useFactory: topPageRepositoryFactory,
          provide: getModelToken('TopPage'),
        },
      ],
    }).compile();
    service = module.get<TopPageService>(TopPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('get working', async () => {
    const id = new Types.ObjectId().toHexString();
    topPageRepositoryFactory()
      .findById()
      .exec.mockReturnValueOnce([{ productId: id }]);

    const res = await service.get(id);
    expect(res[0].productId).toBe(id);
  });
});
