import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import Client from "./client.entity";
import Company from "./company.entity";
import { PizzaOption } from "./pizzaOption.entity";
import { ProductSell } from "./product_sell.entity";

export enum statusType {
    PENDENTE = "Pendente",
    ACEITO= "Aceito",
    SAIU= "Saiu para a entrega",
    VEMBUSCAR="Pronto para retirada",
    CONCLUIDO="Concluído",
    RETIRADA = "Retirada",
    ENTREGA = "Entrega",
    CANCELADO = "Cancelado"
  }

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(()=>ProductSell)
    @JoinTable()
    products: ProductSell[] ;
    
    @ManyToMany(()=>PizzaOption)
    @JoinTable()
    pizzaOption: PizzaOption[] ;
    
    @Column({ type: "enum", enum: statusType, default: statusType.ENTREGA})
    type:statusType

    @Column({ type: "enum", enum: statusType, default: statusType.PENDENTE})
    status:statusType
    
    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;
    
    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;

    @Column({ type: "varchar", length: 19, nullable: true })
    taxa?: string | null | undefined;
    
    @Column({ type: "varchar", length: 7, nullable: true })
    index?: string | null | undefined;

    @ManyToOne(() => Client, client => client.pedidos)
    client: Client;

   
    @ManyToOne(() => Company, company => company.pedidos, { onDelete: "CASCADE" })
    company: Company;


}
