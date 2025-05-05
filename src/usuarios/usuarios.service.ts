import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UsuariosService {
  async create(data: { cpf: string; nome: string; email: string; senha: string }) {
    return prisma.usuario.create({ data });
  }

  async findAll() {
    return prisma.usuario.findMany();
  }

  async findOne(id: number) {
    return prisma.usuario.findUnique({ where: { id } });
  }

  async update(id: number, data: any) {
    return prisma.usuario.update({ where: { id }, data });
  }

  async remove(id: number) {
    return prisma.usuario.delete({ where: { id } });
  }
}