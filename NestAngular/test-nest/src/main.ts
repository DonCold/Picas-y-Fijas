import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const PORT = process.env.PORT || 3000;

  app.enableCors();

  await app.listen(PORT, () => {
    console.log(`🚀 Application is running on: http://localhost:${PORT}`);
  });
}

bootstrap();
