import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}

  findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOneOrFail({ where: email }).catch(() => {
      throw new NotFoundException('Usuário não encontrado');
    });
  }
}
