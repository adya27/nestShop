import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { CreateReviewDto } from 'src/review/dto/create.review.dto';
import { Types, disconnect } from 'mongoose';
import { REVIEW_NOT_FOUND } from '../src/review/review.constants';

const productId = new Types.ObjectId().toHexString();

const testDto: CreateReviewDto = {
  name: 'test name',
  title: 'test title',
  description: 'test description',
  rating: 5,
  productId,
};

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let createdId: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/review/create (POST)', (done) => {
    request(app.getHttpServer())
      .post('/review/create')
      .send(testDto)
      .expect(201)
      .then(({ body }: request.Response) => {
        createdId = body._id;
        expect(createdId).toBeDefined();
        done();
      });
  });

  it('/review/byProduct/:productId (GET) --success', (done) => {
    request(app.getHttpServer())
      .get(`/review/byProduct/${productId}`)
      .expect(200)
      .then(({ body }: request.Response) => {
        expect(body.length).toBe(1);
        done();
      });
  });

  it('/review/byProduct/:productId (GET) --fail', (done) => {
    const fakeProductId = new Types.ObjectId().toHexString();
    request(app.getHttpServer())
      .get(`/review/byProduct/${fakeProductId}`)
      .expect(200)
      .then(({ body }: request.Response) => {
        expect(body.length).toBe(0);
        done();
      });
  });

  it('/review (DELETE)', () => {
    return request(app.getHttpServer())
      .delete(`/review/${createdId}`)
      .expect(200);
  });

  it('/review (DELETE) . --fail', () => {
    const fakeId = new Types.ObjectId().toHexString();
    return request(app.getHttpServer())
      .delete(`/review/${fakeId}`)
      .expect(404, {
        statusCode: 404,
        message: REVIEW_NOT_FOUND,
      });
  });

  it('/review (DELETE) . --fail', () => {
    const fakeId = new Types.ObjectId().toHexString();
    return request(app.getHttpServer())
      .delete(`/review/${fakeId}`)
      .expect(404, {
        statusCode: 404,
        message: REVIEW_NOT_FOUND,
      });
  });

  afterAll(() => {
    disconnect();
  });
});
