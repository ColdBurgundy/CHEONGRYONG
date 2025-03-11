import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getPlayers() {
    return this.prisma.player.findMany(); // MySQL `players` 테이블에서 모든 데이터 조회
  }
}
