import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 500})
  nome: string;

  @Column('float')
  price: number

  @Column({type: 'varchar', length: 8000})
  imagembase64: string;
}