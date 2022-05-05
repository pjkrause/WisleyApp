import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

// remove this now so the root is the static PWA
//  @Get()
//  getHello(): string {
//    return this.appService.getHello();
//  }
}
