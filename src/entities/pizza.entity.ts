import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PizzaOption } from "./pizzaOption.entity";
import Company from "./company.entity";


@Entity()
export class Pizza {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price_G: string; 

    @Column()
    price_M: string; 

    @Column()
    price_P: string; 

    @Column("text", { nullable: true })
    description?: string;
    
    @Column("text",{nullable:true})
    img?:string | null | undefined

    @OneToMany(() => PizzaOption, (po) => po.pizza)
    pizzaOptions: PizzaOption[];

    @ManyToOne(()=> Company,(c)=>c.pizzas, { onDelete: "CASCADE" })
    company:Company;
}