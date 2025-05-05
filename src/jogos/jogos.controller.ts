import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { JogosService } from './jogos.service';

@Controller('jogos')
export class JogosController {
  constructor(private readonly jogosService: JogosService) {}

  @Post()
  create(@Body() data: any) {
    return this.jogosService.create(data);
  }

  @Get()
  findAll() {
    return this.jogosService.findAll();
  }

  @Get('usuario/:usuarioId')
  findByUsuario(@Param('usuarioId') usuarioId: string) {
    return this.jogosService.findByUsuario(+usuarioId);
  }
}