import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Message } from './message';

@Controller()
export class ClientMqttController {
  constructor(
    @Inject('HELLO SERVICE') private readonly client: ClientProxy
  ) {}

  async onApplicationBootstrap() {
    try {
      await this.client.connect();      
    } catch (error) {
      console.error("Error during connection --> ", error);
    }
  }

  @Get()
  getHello(){
    this.client.emit('message_printed', new Message("turnOnLight!"));
    return "Message sent!";
  }
}
