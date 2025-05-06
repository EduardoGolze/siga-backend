import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class JogosService {
  async create(data: any) {
    return await prisma.jogo_da_velha.create({ data });
  }

  async findAll() {
    return await prisma.jogo_da_velha.findMany({
      include: { usuario: true }
    });
  }

  async findOne(id: number) {
    return await prisma.jogo_da_velha.findUnique({
      where: { id },
      include: { usuario: true }
    });
  }

  async update(id: number, data: any) {
    return await prisma.jogo_da_velha.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return await prisma.jogo_da_velha.delete({ where: { id } });
  }
}