import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UsuariosService } from "./usuarios.service";
import { userInfo } from "os";

@Controller("usuarios")
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
  @Post()
  create(@Body() body: any) {
    return this.usuariosService.create(body);
  }
  @UseGuards(AuthGuard("jwt"))
  @Get()
  async findAllSafe() {
    return this.usuariosService.findAllSafe();
  }
  @UseGuards(AuthGuard("jwt"))
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usuariosService.findOne(+id);
  }
  @UseGuards(AuthGuard("jwt"))
  @Put(":id")
  update(@Param("id") id: string, @Body() body: any) {
    return this.usuariosService.update(+id, body);
  }
  @UseGuards(AuthGuard("jwt"))
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usuariosService.remove(+id);
  }
}
