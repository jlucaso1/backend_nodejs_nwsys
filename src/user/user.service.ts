import {
  Inject,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}

  // Colocar um usuário no banco caso não exista
  async onModuleInit() {
    const users = await this.userRepository.find();
    if (users.length === 0) {
      await this.userRepository.insert({
        email: 'jlucaso@hotmail.com',
        password: '123456',
      });
    }
    // console.log(await this.userRepository.find());
  }

  findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ email }).catch(() => {
      throw new NotFoundException('Usuário não encontrado');
    });
  }
}
