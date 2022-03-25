import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';

declare module 'express' {
  export interface Request {
    user: any;
  }
}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: '1',
      database: 'cv_builder_db',
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
      synchronize: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
