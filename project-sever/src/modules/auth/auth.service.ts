import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    //jwtservice để mã hóa pass
    private jwtService: JwtService,
  ) {}

  // method đăng nhập vào, lấy tham số là username, pass và tìm trong mảng user bởi method findone của userService

  async getAllUser() {
    return this.usersService.getAllUser();
  }

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username);

    // nếu tìm thấy user. xem thử password có đúng password không, nếu không, ném ra lỗi.

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    // payload nhận id và username
    const payload = { sub: user.userId, username: user.username };
    return { access_token: await this.jwtService.signAsync(payload) };
    //đóng gói chuỗi JSON Web Token vào access_token, và trả về từ phương thức signIn để sử dụng sau này.
  }
}
