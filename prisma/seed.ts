import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.usuarios.createMany({
    data: [
      { id: 1, cpf: "12345678901", nome: "Admin", email: "admin@siga.com", senha: "123" },
      { id: 2, cpf: "98765432101", nome: "Professor 1", email: "prof1@siga.com", senha: "123" },
      { id: 3, cpf: "11122233344", nome: "Aluno 1", email: "aluno1@siga.com", senha: "123" },
    ],
  });

  await prisma.professores.create({ data: { fk_usuarios_id: 2, siape: 12345 } });
  await prisma.estudantes.create({ data: { fk_usuarios_id: 3, ra: 1001 } });

  await prisma.disciplinas.create({
    data: {
      nome: "Programação Web",
      carga_horaria: 60,
      curso: "TI",
      fk_professores_fk_usuarios_id: 2,
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());