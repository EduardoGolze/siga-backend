import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class EstudantesService {
  async create(data: any) {
    return await prisma.estudantes.create({ data });
  }

  async findAll() {
    return await prisma.estudantes.findMany({
      include: { usuario: true }
    });
  }

  async findOne(id: number) {
    return await prisma.estudantes.findUnique({ 
      where: { fk_usuarios_id: id },
      include: { usuario: true }
    });
  }

  async update(id: number, data: any) {
    return await prisma.estudantes.update({
      where: { fk_usuarios_id: id },
      data,
    });
  }

  async remove(id: number) {
    return await prisma.estudantes.delete({ where: { fk_usuarios_id: id } });
  }
}
