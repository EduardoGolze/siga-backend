import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EstudantesService } from './estudantes.service';

@Controller('estudantes')
export class EstudantesController {
  constructor(private readonly estudantesService: EstudantesService) {}

  @Post()
  create(@Body() data: any) {
    return this.estudantesService.create(data);
  }

  @Get()
  findAll() {
    return this.estudantesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estudantesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.estudantesService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudantesService.remove(+id);
  }
}