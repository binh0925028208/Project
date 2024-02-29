import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  // cho một mảng sẵn dể lấy dữ liệu như sau
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: '123',
    },
    {
      userId: 2,
      username: 'maria',
      password: '456',
    },
  ];
  // đây là 1 method tìm user theo username trong mảng users.
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async getAllUser() {
    let userDb = this.users;
    return userDb;
  }
}
