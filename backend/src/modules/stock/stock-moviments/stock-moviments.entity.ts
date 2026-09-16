import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { StockProduct } from "../stock-products/stock.entity";


export enum StockMovementType {
  IN = "IN",
  OUT = "OUT",
  ADJUSTMENT = "ADJUSTMENT",
}

@Entity("stock_movements")
export class StockMovement {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(
    () => StockProduct,
    (product) => product.movements,
    {
      onDelete: "CASCADE",
    }
  )
  @JoinColumn({
    name: "product_id",
  })
  product: StockProduct;

  @Column({
    type: "enum",
    enum: StockMovementType,
  })
  type: StockMovementType;

  @Column("decimal", {
    precision: 10,
    scale: 3,
  })
  quantity: number;

  @Column({
    length: 255,
  })
  reason: string;

  @Column("decimal", {
    precision: 10,
    scale: 3,
  })
  unitCost: number|null|undefined;

  @CreateDateColumn()
  createdAt: Date;
}