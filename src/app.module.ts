import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProfessoresModule } from './professores/professores.module';
import { EstudantesModule } from './estudantes/estudantes.module';
import { DisciplinasModule } from './disciplinas/disciplinas.module';
import { MatriculasModule } from './matriculas/matriculas.module';
import { JogosModule } from './jogos/jogos.module';

@Module({
  imports: [
    UsuariosModule,
    ProfessoresModule,
    EstudantesModule,
    DisciplinasModule,
    MatriculasModule,
    JogosModule,
  ],
})
export class AppModule {}