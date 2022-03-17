import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 500 })
  nome: string;

  @Column('float', { default: 0.0 })
  preco: number;

  @Column({ type: 'varchar', nullable: true })
  imagembase64: string;
}
