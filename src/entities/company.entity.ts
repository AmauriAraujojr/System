import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("companies")
class Company{

    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column({length:100})
    corporateReason: string

    @Column({length:100})
    fantasyName: string

    @Column({length:15})
    cnpj: string

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


}

export default Company