import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

declare module 'express' {
  export interface Request {
    user: any;
  }
}

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://duyhp2405:hpduyna123@cluster0.tryjz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    ),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
