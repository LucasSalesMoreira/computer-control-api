import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/block')
  async postBlock() {
    this.appService.block();
  }

  @Post('/work')
  async postWork() {
    this.appService.work();
    return true;
  }
}
