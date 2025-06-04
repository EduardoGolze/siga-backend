import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from "@nestjs/common";
import { UsuariosService } from "./usuarios.service";

@Controller("usuarios")
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
  @Post()
  create(@Body() body: any) {
    return this.usuariosService.create(body);
  }
  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usuariosService.findOne(+id);
  }
  @Put(":id")
  update(@Param("id") id: string, @Body() body: any) {
    return this.usuariosService.update(+id, body);
  }
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usuariosService.remove(+id);
  }
}
