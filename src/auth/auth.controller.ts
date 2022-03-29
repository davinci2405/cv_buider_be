import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() user: any) {
    const { username, password } = user;
    const result = await this.authService.validateUser(username, password);
    return await this.authService.login(result);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
