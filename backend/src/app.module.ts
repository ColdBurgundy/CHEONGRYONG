import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module'; // ✅ 올바른 경로 확인

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
