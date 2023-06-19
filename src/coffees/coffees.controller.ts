import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';

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
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} coffee`;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action remove coffee with id  #${id} `;
  }
}
