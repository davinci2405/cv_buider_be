import { MiddlewareConsumer, NestModule } from '@nestjs/common';
declare module 'express' {
    interface Request {
        user: any;
    }
}
export declare class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
}
