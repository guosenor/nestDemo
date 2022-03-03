import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root123',
      database: 'test', // 自己提前建好数据库, 无需建表
      entities: [join(__dirname, '../**/**.entity{.ts,.js}')], // 实体存放的目录, 目前只能靠文件后缀识别
      synchronize: true, // 项目一运行就根据实体自动创建表结构
    }),
  ],
})
export class DatabaseModule {}
