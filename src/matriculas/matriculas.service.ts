import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class MatriculasService {
  async create(data: { 
    fk_disciplinas_id: number;
    fk_estudantes_fk_usuarios_id: number;
    n1?: number;
    n2?: number;
  }) {
    return prisma.matriculaSe.create({ data });
  }

  async findAll() {
    return prisma.matriculaSe.findMany({
      include: { disciplina: true, estudante: { include: { usuario: true } } },
    });
  }

  async findByDisciplina(disciplinaId: number) {
    return prisma.matriculaSe.findMany({
      where: { fk_disciplinas_id: disciplinaId },
      include: { estudante: { include: { usuario: true } } },
    });
  }

  async update(disciplinaId: number, estudanteId: number, data: any) {
    return prisma.matriculaSe.update({
      where: { 
        fk_disciplinas_id_fk_estudantes_fk_usuarios_id: {
          fk_disciplinas_id: disciplinaId,
          fk_estudantes_fk_usuarios_id: estudanteId,
        },
      },
      data,
    });
  }

  async remove(disciplinaId: number, estudanteId: number) {
    return prisma.matriculaSe.delete({
      where: { 
        fk_disciplinas_id_fk_estudantes_fk_usuarios_id: {
          fk_disciplinas_id: disciplinaId,
          fk_estudantes_fk_usuarios_id: estudanteId,
        },
      },
    });
  }
}