import { NestFactory } from '@nestjs/core';
import { ClientMqttModule } from './client-mqtt.module';

async function bootstrap() {
  const app = await NestFactory.create(ClientMqttModule);
  await app.listen(3000);
}
bootstrap();
