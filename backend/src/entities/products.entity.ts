import { Column, Entity,  ManyToOne,  OneToMany,  PrimaryGeneratedColumn } from "typeorm";
import Company from "./company.entity";


export enum MeasurementType {
   UNIDADE = "Unidade",
    QUILOGRAMA= "Quilograma",
  }

@Entity("products")
class Product{

    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column({length:100})
    name: string

    @Column({length: 100 })
    quantity: string

    @Column({ type: "varchar", length: 100, nullable:true})
    initialPrice?: string | null | undefined

    @Column({length:100})
    price:string

    @Column({length:100})
    category: string

    @Column({type: "varchar", length:200, nullable: true})
    supplier?: string | null | undefined

    @Column({ type: "enum", enum: MeasurementType, default: MeasurementType.UNIDADE})
    unitOfMeasurement:MeasurementType

    @Column("text",{nullable:true})
    img?:string | null | undefined

    @ManyToOne(()=> Company,(c)=>c.products, { onDelete: "CASCADE" })
    company:Company;

}
export default Product