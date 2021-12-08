import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ClientMqttService {
  
  /**
   * Notify via nest console logger
   * @param payload 
   * @returns 
   */
  subIot(payload): void {
    Logger.log("Sub IoT", payload.temp1);
    return
  }

}
