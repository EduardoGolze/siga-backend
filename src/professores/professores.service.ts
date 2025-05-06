import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ProfessoresService {
  async create(data: any) {
    return await prisma.professores.create({ data });
  }

  async findAll() {
    return await prisma.professores.findMany();
  }

  async findOne(id: number) {
    return await prisma.professores.findUnique({ 
      where: { fk_usuarios_id: id },
      include: { usuario: true }
    });
  }

  async update(id: number, data: any) {
    return await prisma.professores.update({
      where: { fk_usuarios_id: id },
      data,
    });
  }

  async remove(id: number) {
    return await prisma.professores.delete({ where: { fk_usuarios_id: id } });
  }
}