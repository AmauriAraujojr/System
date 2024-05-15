import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Company from "./company.entity";
import Address from "./address.entity";


@Entity("clients")
class Client{

    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column({length:100})
    name: string

    @Column({length:20})
    phoneNumber: string

    @Column({ length: 50, unique: true })
    email: string;

    @Column({length:200})
    password: string


    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const hasRounds:any = getRounds(this.password);
        if(!hasRounds){
            this.password = hashSync(this.password, 10)
        }
    }
    @OneToOne(() => Address, { onDelete: "CASCADE" })
    @JoinColumn()
    address:Address ;

    // @ManyToOne(()=> Company,(c)=>c.clients, { onDelete: "CASCADE" })
    // company:Company;

}
export default Client