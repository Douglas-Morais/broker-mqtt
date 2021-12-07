import { Module } from '@nestjs/common';
import { Transport, ClientsModule } from '@nestjs/microservices';
import { ClientMqttController } from './client-mqtt.controller';
import { ClientMqttService } from './client-mqtt.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HELLO SERVICE',
        transport: Transport.TCP,
        options: {
          port: 1883
        },
      }
    ]),
  ],
  controllers: [ClientMqttController],
  providers: [ClientMqttService],
})
export class ClientMqttModule { }
