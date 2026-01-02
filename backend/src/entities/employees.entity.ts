import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Company from "./company.entity";


export enum EmployeeType {
    MOTOBOY = "Motoboy",
    GARÇON= "Garçon",
    PIZZAIOLO="Pizzaiolo",
  }
@Entity("employees")
class Employees{

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

    @Column({ type: "enum", enum: EmployeeType, default: EmployeeType.GARÇON})
    job: EmployeeType



    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const hasRounds:any = getRounds(this.password);
        if(!hasRounds){
            this.password = hashSync(this.password, 10)
        }
    }
    @ManyToOne(()=> Company,(c)=>c.employees, { onDelete: "CASCADE" })
   company:Company;

}
export default Employees