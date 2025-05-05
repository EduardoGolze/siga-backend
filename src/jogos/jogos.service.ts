import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class JogosService {
  async create(data: { 
    player1: string;
    player2: string;
    resultado: string;
    fk_usuarios_id: number;
  }) {
    return prisma.jogoDaVelha.create({ data });
  }

  async findAll() {
    return prisma.jogoDaVelha.findMany({
      include: { usuario: true },
    });
  }

  async findByUsuario(usuarioId: number) {
    return prisma.jogoDaVelha.findMany({
      where: { fk_usuarios_id: usuarioId },
    });
  }
}