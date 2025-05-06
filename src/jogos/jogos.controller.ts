import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { JogosService } from './jogos.service';

@Controller('jogos')
export class JogosController {
  constructor(private readonly jogosService: JogosService) {}

  @Post()
  create(@Body() body: any) {
    return this.jogosService.create(body);
  }

  @Get()
  findAll() {
    return this.jogosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jogosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.jogosService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jogosService.remove(+id);
  }
}