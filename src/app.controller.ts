import { Get, Controller, Render, Body, Post } from '@nestjs/common';
import {PhoneDto} from './Phone.Dto';
@Controller()
export class AppController {
  @Get()
  @Render('form')
  root() {
    return {};
  }

  @Post()
  @Render('phone-style')

  HandlePhone(@Body() body: PhoneDto):object{
    return body;
  }

}