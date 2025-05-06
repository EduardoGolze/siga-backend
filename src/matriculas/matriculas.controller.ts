import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MatriculasService } from './matriculas.service';

@Controller('matriculas')
export class MatriculasController {
  constructor(private readonly matriculasService: MatriculasService) {}

  @Post()
  create(@Body() body: any) {
    return this.matriculasService.create(body);
  }

  @Get()
  findAll() {
    return this.matriculasService.findAll();
  }

  @Get(':disciplinaId/:estudanteId')
  findOne(
    @Param('disciplinaId') disciplinaId: string,
    @Param('estudanteId') estudanteId: string
  ) {
    return this.matriculasService.findOne(+disciplinaId, +estudanteId);
  }

  @Put(':disciplinaId/:estudanteId')
  update(
    @Param('disciplinaId') disciplinaId: string,
    @Param('estudanteId') estudanteId: string,
    @Body() body: any
  ) {
    return this.matriculasService.update(+disciplinaId, +estudanteId, body);
  }

  @Delete(':disciplinaId/:estudanteId')
  remove(
    @Param('disciplinaId') disciplinaId: string,
    @Param('estudanteId') estudanteId: string
  ) {
    return this.matriculasService.remove(+disciplinaId, +estudanteId);
  }
}