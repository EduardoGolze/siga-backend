import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Usuários
  await prisma.usuarios.createMany({
    data: [
      { 
        id: 1,
        cpf: "12345678901",
        nome: "Admin",
        email: "admin@siga.com",
        senha: "$2b$10$ExampleHash123", // Substituir por hash real
        data_nascimento: new Date('1990-01-01')
      },
      { 
        id: 2,
        cpf: "98765432101",
        nome: "Professor 1",
        email: "prof1@siga.com",
        senha: "$2b$10$ExampleHash123",
        data_nascimento: new Date('1985-05-15')
      },
      { 
        id: 3,
        cpf: "11122233344",
        nome: "Aluno 1",
        email: "aluno1@siga.com",
        senha: "$2b$10$ExampleHash123",
        data_nascimento: new Date('2000-10-20')
      }
    ],
  });

  // Professores
  await prisma.professores.create({
    data: { 
      fk_usuarios_id: 2,
      siape: 12345
    }
  });

  // Estudantes
  await prisma.estudantes.create({ 
    data: { 
      fk_usuarios_id: 3,
      ra: 1001
    }
  });

  // Disciplinas
  const disciplina = await prisma.disciplinas.create({
    data: {
      nome: "Programação Web",
      carga_horaria: 60,
      curso: "TI",
      periodo: 3,
      turno: "Noturno",
      qnt_total_aulas: 20,
      fk_professores_fk_usuarios_id: 2,
    },
  });

  // Matrículas
  await prisma.matricula_se.create({
    data: {
      fk_disciplinas_id: disciplina.id,
      fk_estudantes_fk_usuarios_id: 3,
      n1: 7.5,
      n2: 8.0,
      media: 7.75,
      faltas: 2,
      situacao: "Cursando"
    }
  });

  // Jogos
  await prisma.jogo_da_velha.create({
    data: {
      player1: "Jogador1",
      player2: "Jogador2",
      resultado: "Vitória do Jogador1",
      data_jogo: new Date(),
      fk_usuarios_id: 3
    }
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });