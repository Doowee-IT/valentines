import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Enable CORS for frontend
  app.enableCors();
  
  // Serve static files from frontend directory
  app.useStaticAssets(join(__dirname, '..', '..', 'frontend'));
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  console.log(`\n💕 Valentine's Invitation is running on: http://localhost:${port}`);
  console.log(`📝 API endpoint available at: http://localhost:${port}/api/response\n`);
}

bootstrap();
