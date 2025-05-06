import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DisciplinasService } from './disciplinas.service';

@Controller('disciplinas')
export class DisciplinasController {
  constructor(private readonly disciplinasService: DisciplinasService) {}

  @Post()
  create(@Body() body: any) {
    return this.disciplinasService.create(body);
  }

  @Get()
  findAll() {
    return this.disciplinasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.disciplinasService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.disciplinasService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.disciplinasService.remove(+id);
  }
}