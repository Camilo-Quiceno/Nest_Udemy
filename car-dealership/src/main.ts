import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Sola deja la data que se encuentra en el DTO, elimina la data que no se encuentra en el DTO
      forbidNonWhitelisted: true, // Error y devuelve porqué no se permitió la data
    }),
  );

  await app.listen(3000);
}
bootstrap();
