import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as AWS from 'aws-sdk'

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}


const s3 = new AWS.S3({
    accessKeyId: process.env.S3_USER_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET,
  })

export default s3

bootstrap();
