import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MatriculasService } from './matriculas.service';

@Controller('matriculas')
export class MatriculasController {
  constructor(private readonly matriculasService: MatriculasService) {}

  @Post()
  create(@Body() data: any) {
    return this.matriculasService.create(data);
  }

  @Get()
  findAll() {
    return this.matriculasService.findAll();
  }

  @Get('disciplina/:disciplinaId')
  findByDisciplina(@Param('disciplinaId') disciplinaId: string) {
    return this.matriculasService.findByDisciplina(+disciplinaId);
  }

  @Put(':disciplinaId/:estudanteId')
  update(
    @Param('disciplinaId') disciplinaId: string,
    @Param('estudanteId') estudanteId: string,
    @Body() data: any,
  ) {
    return this.matriculasService.update(+disciplinaId, +estudanteId, data);
  }

  @Delete(':disciplinaId/:estudanteId')
  remove(
    @Param('disciplinaId') disciplinaId: string,
    @Param('estudanteId') estudanteId: string,
  ) {
    return this.matriculasService.remove(+disciplinaId, +estudanteId);
  }
}