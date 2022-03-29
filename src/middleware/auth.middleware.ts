import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private authService: AuthService) {}

  use(req: Request, res: Response, next: () => void) {
    if (req.headers?.authorization) {
      const [type, token] = req.headers.authorization.split(' ');
      const check = this.authService.verifyAccount(token);
      if (check.isSuccess) {
        req.user = {
          userId: check.data._id,
        };
        next();
      } else throw new UnauthorizedException();
    } else throw new UnauthorizedException();
  }
}
