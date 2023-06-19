import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  findAll() {
    return 'this actions return all coffees !!';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this action return #${id} coffee`;
  }
  @Post()
  create(@Body() body) {
    return body;
  }
}
