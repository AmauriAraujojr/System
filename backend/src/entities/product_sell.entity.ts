import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
  
  } from "typeorm";
import Product from "./products.entity";
  
 
  
  @Entity()
  export class ProductSell{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    price: string;
  
  
    @ManyToOne(() => Product, (product) => product.productSell)
    product: Product;
  }
  