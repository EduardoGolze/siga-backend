import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class DisciplinasService {
  async create(data: { 
    nome: string; 
    carga_horaria: number; 
    fk_professores_fk_usuarios_id: number 
  }) {
    return prisma.disciplina.create({ data });
  }

  async findAll() {
    return prisma.disciplina.findMany({
      include: { professor: { include: { usuario: true } } },
    });
  }

  async findOne(id: number) {
    return prisma.disciplina.findUnique({ 
      where: { id },
      include: { professor: { include: { usuario: true } } },
    });
  }

  async update(id: number, data: any) {
    return prisma.disciplina.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return prisma.disciplina.delete({ where: { id } });
  }
}