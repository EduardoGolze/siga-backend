import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class EstudantesService {
  async create(data: { ra: number; fk_usuarios_id: number }) {
    return prisma.estudante.create({ data });
  }

  async findAll() {
    return prisma.estudante.findMany({
      include: { usuario: true }, // Traz os dados do usuário relacionado
    });
  }

  async findOne(id: number) {
    return prisma.estudante.findUnique({ 
      where: { fk_usuarios_id: id },
      include: { usuario: true },
    });
  }

  async update(id: number, data: any) {
    return prisma.estudante.update({
      where: { fk_usuarios_id: id },
      data,
    });
  }

  async remove(id: number) {
    return prisma.estudante.delete({ where: { fk_usuarios_id: id } });
  }
}