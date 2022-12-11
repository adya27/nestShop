import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleOptions> => ({
  uri: getMongoString(configService),
  ...getMongoOptions(),
});

const getMongoString = (configService: ConfigService): string => {
  const uri =
    'mongodb://' +
    configService.get<string>('MONGO_LOGIN') +
    ':' +
    configService.get<string>('MONGO_PASSWORD') +
    '@' +
    configService.get<string>('MONGO_HOST') +
    ':' +
    configService.get<string>('MONGO_PORT') +
    '/' +
    configService.get<string>('MONGO_AUTH_DATABASE');
  console.log('uri', uri);
  return uri;
};
const getMongoOptions = () => ({
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
