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

  // Colocar um usuário padrão no banco de dados
  async onModuleInit() {
    await this.userRepository.clear();
    var user = await this.userRepository.create({
      email: 'jlucaso@hotmail.com',
      password: '123456',
    });
    await this.userRepository.save(user);
  }

  findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ email }).catch(() => {
      throw new NotFoundException('Usuário não encontrado');
    });
  }
}
