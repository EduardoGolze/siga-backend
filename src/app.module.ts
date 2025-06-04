import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsuariosModule } from "./usuarios/usuarios.module";
import { MatriculasModule } from "./matriculas/matriculas.module";
import { JogosModule } from "./jogos/jogos.module";
import { ProfessoresModule } from "./professores/professores.module";
import { EstudantesModule } from "./estudantes/estudantes.module";
import { DisciplinasModule } from "./disciplinas/disciplinas.module";

@Module({
  imports: [
    UsuariosModule,
    MatriculasModule,
    JogosModule,
    ProfessoresModule,
    EstudantesModule,
    DisciplinasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
