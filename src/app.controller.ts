import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail/mail.service';

@Controller()
export class AppController {
  constructor(private readonly mailService: MailService) {}

  @Get()
  getHello(): string {
    return this.mailService.sendEmail();
  }
}
