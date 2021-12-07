import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientMqttService {
  getHello(): string {
    return 'Hello World!';
  }
}
