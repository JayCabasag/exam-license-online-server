import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const corsOptios = {
  origin: ['http://localhost:4200'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Accept, Authorization',
  credentials: true,
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptios);
  const globalPrefix = 'api/v1';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(3000);
}
bootstrap();
