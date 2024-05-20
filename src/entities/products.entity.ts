import { Column, Entity,  ManyToOne,  PrimaryGeneratedColumn } from "typeorm";
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

    @Column({type:"float"})
    quantity: number

    @Column({type:"float"})
    price:number

    @Column({type: "varchar", length:200, nullable: true})
    supplier?: string | null | undefined

    @Column({ type: "enum", enum: MeasurementType, default: MeasurementType.UNIDADE})
    unitOfMeasurement:MeasurementType

    @ManyToOne(()=> Company,(c)=>c.products, { onDelete: "CASCADE" })
    company:Company;

}
export default Product