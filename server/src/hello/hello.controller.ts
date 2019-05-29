import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getAll() {
    return { message: 'hello from nest'};
  }
}
