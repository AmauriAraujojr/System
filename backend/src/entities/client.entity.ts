import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Address from "./address.entity";


@Entity("clients")
class Client{

    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column({length:100})
    name: string

    @Column({length:20})
    phoneNumber: string

  
    @OneToOne(() => Address, { onDelete: "CASCADE" })
    @JoinColumn()
    address:Address ;



    // @ManyToOne(()=> Company,(c)=>c.clients, { onDelete: "CASCADE" })
    // company:Company;

}
export default Client