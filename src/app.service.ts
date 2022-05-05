import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  // Should be removed before first full release as not in use
  getHello(): string {
    return 'Hello World!';
  }
}
