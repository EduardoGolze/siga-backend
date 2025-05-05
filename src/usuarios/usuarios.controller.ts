import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from '@prisma/client';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async create(@Body() data: Omit<Usuario, 'id'>): Promise<Usuario> {
    return this.usuariosService.create(data);
  }

  @Get()
  async findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Usuario | null> {
    return this.usuariosService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Usuario>
  ): Promise<Usuario> {
    return this.usuariosService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Usuario> {
    return this.usuariosService.remove(+id);
  }
}
