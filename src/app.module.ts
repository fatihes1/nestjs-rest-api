// ignore the following line, it stops TypeScript from complaining
// Similar App.js in React
import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_PIPE } from '@nestjs/core';


@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule, ConfigModule.forRoot({
    isGlobal: true,
  })],
})
export class AppModule {}
