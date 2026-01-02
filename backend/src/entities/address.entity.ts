import {
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
import Client from "./client.entity";
  
  @Entity("addresses")
  class Address {
    @PrimaryGeneratedColumn("increment")
    id: number;
  
    @Column({ length: 150 })
    street: string;
    
    @Column({ type: "varchar", length: 7, nullable: true })
    number?: string | null | undefined;
  
    @Column({ length: 150, default:"Bom Repouso" })
    city: string;
  
    @Column({ length: 100})
    neighborhood: string;
  
  
    @OneToOne(() => Client, (c) => c.address, {onDelete: "CASCADE"})
    client: Client;
  }

  export default Address