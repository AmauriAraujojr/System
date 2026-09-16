import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { StockMovement } from "../stock-moviments/stock-moviments.entity";

@Entity("stock_products")
export class StockProduct {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({
    type: "enum",
    enum: ["kg", "g", "l", "ml", "un"],
  })
  unit: "kg" | "g" | "l" | "ml" | "un";

  @Column("decimal", {
    precision: 10,
    scale: 3,
    default: 0,
  })
  currentStock: number;

  @Column("decimal", {
    precision: 10,
    scale: 2,
    default: 0,
  })
  minimumStock: number;

  @Column("decimal", {
    precision: 10,
    scale: 2,
    default: 1,
  })
  yieldRate: number;

  @Column({
    default: true,
  })
  active: boolean;

  @Column("decimal", {
    precision: 10,
    scale: 2,
    default: 1,
  })
  costPrice: number;


  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(
  () => StockMovement,
  (movement) => movement.product
)
movements: StockMovement[];
}