import { Controller, Get } from '@nestjs/common';

@Controller('players')  // /players 엔드포인트 생성
export class AppController {
  @Get()
  getPlayers() {
    return [
      { id: 1, name: '홍길동', position: '투수' },
      { id: 2, name: '이순신', position: '포수' },
      { id: 3, name: '김유신', position: '외야수' },
    ];
  }
}
