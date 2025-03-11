// backend/src/app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Controller('players')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getPlayers() {
    return this.prisma.player.findMany(); // ✅ MySQL에서 데이터 가져오기
  }
}
