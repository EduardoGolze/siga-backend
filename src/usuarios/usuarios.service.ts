
import { Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class UsuariosService {
async create(data: any) {


return await prisma.usuario.create({ data });
}
async findAll() {

return await prisma.usuario.findMany();
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
