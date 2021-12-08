import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ClientMqttModule } from './client-mqtt.module';

async function bootstrap() {
  const client = await NestFactory.createMicroservice<MicroserviceOptions>(ClientMqttModule, {
    transport: Transport.MQTT,
    options: {
      host: 'localhost',
      port: 1883,
      protocol: 'mqtt',
    },
  });

  await client.listen()
    .then(() => console.warn("Connection successfully"))
    .catch((err) => console.error("An error has occurred! ", err));
}
bootstrap();
