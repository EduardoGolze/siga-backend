import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UsuariosService {
  async create(data: any) {
    return await prisma.usuarios.create({ data });
  }

  async findAll() {
    return await prisma.usuarios.findMany();
  }

  async findOne(id: number) {
    return await prisma.usuarios.findUnique({ where: { id } });
  }

  async update(id: number, data: any) {
    return await prisma.usuarios.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return await prisma.usuarios.delete({ where: { id } });
  }
}