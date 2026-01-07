import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Company from "./company.entity";


export enum MeasurementType {
  UNIDADE = "Unidade",
  QUILOGRAMA = "Quilograma",
}

@Entity("categorys")
class Category {

  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 100 })
  name: string

  @Column("text", { nullable: true })
  img?: string | null | undefined

  @Column("text", { nullable: true })
  description?: string | null | undefined

  
  @ManyToOne(() => Company, (c) => c.categorys, { onDelete: "CASCADE" })
  company: Company;

}
export default Category