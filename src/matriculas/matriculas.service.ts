import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class MatriculasService {
  async create(data: any) {
    return await prisma.matricula_se.create({ data });
  }

  async findAll() {
    return await prisma.matricula_se.findMany({
      include: {
        disciplina: true,
        estudante: { include: { usuario: true } }
      }
    });
  }

  async findOne(disciplinaId: number, estudanteId: number) {
    return await prisma.matricula_se.findUnique({
      where: {
        fk_disciplinas_id_fk_estudantes_fk_usuarios_id: {
          fk_disciplinas_id: disciplinaId,
          fk_estudantes_fk_usuarios_id: estudanteId
        }
      }
    });
  }

  async update(disciplinaId: number, estudanteId: number, data: any) {
    return await prisma.matricula_se.update({
      where: {
        fk_disciplinas_id_fk_estudantes_fk_usuarios_id: {
          fk_disciplinas_id: disciplinaId,
          fk_estudantes_fk_usuarios_id: estudanteId
        }
      },
      data
    });
  }

  async remove(disciplinaId: number, estudanteId: number) {
    return await prisma.matricula_se.delete({
      where: {
        fk_disciplinas_id_fk_estudantes_fk_usuarios_id: {
          fk_disciplinas_id: disciplinaId,
          fk_estudantes_fk_usuarios_id: estudanteId
        }
      }
    });
  }
}