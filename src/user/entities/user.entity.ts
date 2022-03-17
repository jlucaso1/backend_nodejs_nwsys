import { compare, hash } from 'bcrypt';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 500, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 500 })
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  private async hashPassword() {
    if (this.password) {
      const hashedPassword = await hash(this.password, 10);
      this.password = hashedPassword;
    }
  }

  async comparePassword(attemptPassword: string) {
    return await compare(attemptPassword, this.password);
  }
}
