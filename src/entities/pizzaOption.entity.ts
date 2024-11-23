import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Pizza } from "./pizza.entity";

export enum sizeType {
    PEQUENA = "Pequena",
    MEDIA= "Média",
    GRANDE="Grande"
   }

@Entity()
export class PizzaOption {
    @PrimaryGeneratedColumn()
    id: number;

    
    @Column({ type: "enum", enum: sizeType})
    size:sizeType

    @Column()
    price: string; 

    @Column("jsonb", { nullable: true })
    extras?: string[] | null;

    @Column({ default: false })
    halfAndHalf: boolean; 

    @Column("text", { nullable: true })
    halfOptions?: string; 

    @OneToOne(() => Pizza, { onDelete: "CASCADE" })
    @JoinColumn()
    pizza:Pizza ;

}
