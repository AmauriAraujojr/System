import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Pizza } from "./pizza.entity";

export enum sizeType {
  PEQUENA = "Pequena",
  MEDIA = "Média",
  GRANDE = "Grande",
}

@Entity()
export class PizzaOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "enum", enum: sizeType })
  size: sizeType;

  @Column()
  price: string;

  @Column({ type: "text", nullable: true })
  obs?: string | null | undefined;

  @Column({ default: false })
  halfAndHalf: boolean;

  @Column("json")
  borda: {sabor:string, price:string}

  @ManyToOne(() => Pizza, (pizza) => pizza.pizzaOptions)
  halfOptions?: Pizza | null;

  @ManyToOne(() => Pizza, (pizza) => pizza.pizzaOptions)
  pizza: Pizza;
}
