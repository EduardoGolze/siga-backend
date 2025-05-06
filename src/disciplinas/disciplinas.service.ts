import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class DisciplinasService {
  async create(data: any) {
    return await prisma.disciplinas.create({ data });
  }

  async findAll() {
    return await prisma.disciplinas.findMany({
      include: { professor: { include: { usuario: true } } }
    });
  }

  async findOne(id: number) {
    return await prisma.disciplinas.findUnique({
      where: { id },
      include: { professor: { include: { usuario: true } } }
    });
  }

  async update(id: number, data: any) {
    return await prisma.disciplinas.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return await prisma.disciplinas.delete({ where: { id } });
  }
}