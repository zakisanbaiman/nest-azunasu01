import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!4';
  }

  getGoodbye(): string {
    return 'Goodbye World!';
  }
}
