import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  price: number;

  @Column()
  img: string;

  @Column()
  brand: string;

  @Column()
  stock: string;

  @Column()
  isDelete: number;

  @Column()
  scale: string;

  @Column()
  desc: string;
}
