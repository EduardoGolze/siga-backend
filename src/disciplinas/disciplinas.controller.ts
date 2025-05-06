import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DisciplinasService } from './disciplinas.service';

@Controller('disciplinas')
export class DisciplinasController {
  constructor(private readonly disciplinasService: DisciplinasService) {}

  @Post()
  async create(@Body() data: any): Promise<any> {
    return this.disciplinasService.create(data);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.disciplinasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return this.disciplinasService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: any): Promise<any> {
    return this.disciplinasService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return this.disciplinasService.remove(+id);
  }
}
