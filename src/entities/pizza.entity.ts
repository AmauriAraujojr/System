import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PizzaOption } from "./pizzaOption.entity";
import Company from "./company.entity";


@Entity()
export class Pizza {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: string; 

    @Column("text", { nullable: true })
    description?: string;
    
    @Column("text",{nullable:true})
    img?:string | null | undefined

    @OneToOne(() => PizzaOption, (po) => po.pizza)
    pizzaOption: PizzaOption;

    @ManyToOne(()=> Company,(c)=>c.pizzas, { onDelete: "CASCADE" })
    company:Company;
}