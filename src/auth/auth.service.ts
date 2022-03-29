import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthDocument } from './auth.schema';

export type Auth = any;

@Injectable()
export class AuthService {
  constructor(@InjectModel('Auth') private authModel: Model<AuthDocument>, private jwtService: JwtService) {}

  async findOne(username: string): Promise<Auth | undefined> {
    return await this.authModel.findOne({ username }).exec();
  }

  async validateUser(username: string, pass: string): Promise<any> {
    // const user = await this.authModel.findOne({ username }).exec();
    const validUser = { userId: 1, username: 'duyhp', password: '123123' };
    if (validUser && validUser.password === pass) {
      const { password, ...result } = validUser;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, userId: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  verifyAccount(token: string) {
    try {
      const validToken = this.jwtService.verify(token);
      return {
        isSuccess: true,
        data: validToken,
      };
    } catch (e) {
      return {
        isSuccess: false,
        data: null,
      };
    }
  }
}
