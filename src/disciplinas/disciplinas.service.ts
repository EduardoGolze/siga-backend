import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class DisciplinasService {
  // constructor(private readonly prisma: PrismaService) {}

  async create(data: any): Promise<any> {
    // return this.prisma.disciplinas.create({ data });
    return { message: 'Disciplina criada', data };
  }

  async findAll(): Promise<any[]> {
    // return this.prisma.disciplinas.findMany();
    return [{ id: 1, nome: 'Matemática' }];
  }

  async findOne(id: number): Promise<any> {
    // return this.prisma.disciplinas.findUnique({ where: { id } });
    return { id, nome: 'Física' };
  }

  async update(id: number, data: any): Promise<any> {
    // return this.prisma.disciplinas.update({ where: { id }, data });
    return { message: 'Disciplina atualizada', id, data };
  }

  async remove(id: number): Promise<any> {
    // return this.prisma.disciplinas.delete({ where: { id } });
    return { message: 'Disciplina removida', id };
  }
}
