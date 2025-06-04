import { Injectable } from "@nestjs/common";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
@Injectable()
export class UsuariosService {
  async create(data: any) {
    return await prisma.usuario.create({ data });
  }
  async findAllSafe() {
    const usuarios = await prisma.usuario.findMany();
    return usuarios.map(({ senha, ...rest }) => rest);
  }
  async findByEmail(email: string) {
    return prisma.usuario.findFirst({
      where: { email },
    });
  }
  async findOne(id: number) {
    return await prisma.usuario.findUnique({ where: { id } });
  }
  async update(id: number, data: any) {
    return await prisma.usuario.update({
      where: { id },
      data,
    });
  }
  async remove(id: number) {
    return await prisma.usuario.delete({ where: { id } });
  }
}
