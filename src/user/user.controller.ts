import { Controller, Get, UseGuards, Patch } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { JwtGuard } from "../auth/guard";
import { GetUser } from "../auth/decorator";
import { User } from '@prisma/client'
import * as Path from "path";

@Controller('users')
export class UserController {

  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  };

  @Patch()
  editUser() {

  }
}
