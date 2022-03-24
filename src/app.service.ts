import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}
  getHello(): any {
    return {
      code: 0,
      message: 'Hello from Typescript',
      data: {},
    };
  }
}
