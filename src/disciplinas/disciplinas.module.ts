import { Module } from '@nestjs/common';
import { DisciplinasService } from './disciplinas.service';
import { DisciplinasController } from './disciplinas.controller';
import { DisciplinasService } from './disciplinas.service';

@Module({
  providers: [DisciplinasService],
  controllers: [DisciplinasController]
})
export class DisciplinasModule {}
