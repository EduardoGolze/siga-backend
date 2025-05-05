import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Usuario, Prisma } from '@prisma/client';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UsuarioCreateInput): Promise<Usuario> {
    return this.prisma.usuario.create({ data });
  }

  async findAll(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany();
  }

  async findOne(id: number): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.UsuarioUpdateInput): Promise<Usuario> {
    return this.prisma.usuario.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Usuario> {
    return this.prisma.usuario.delete({ where: { id } });
  }
}
