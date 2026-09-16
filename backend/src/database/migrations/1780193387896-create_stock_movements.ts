import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateStockMovements1780193387896 implements MigrationInterface {
    name = 'CreateStockMovements1780193387896'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."stock_movements_type_enum" AS ENUM('IN', 'OUT', 'ADJUSTMENT')`);
        await queryRunner.query(`CREATE TABLE "stock_movements" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" "public"."stock_movements_type_enum" NOT NULL, "quantity" numeric(10,3) NOT NULL, "reason" character varying(255) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "product_id" uuid, CONSTRAINT "PK_57a26b190618550d8e65fb860e7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "stock_movements" ADD CONSTRAINT "FK_2c1bb05b80ddcc562cd28d826c6" FOREIGN KEY ("product_id") REFERENCES "stock_products"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stock_movements" DROP CONSTRAINT "FK_2c1bb05b80ddcc562cd28d826c6"`);
        await queryRunner.query(`DROP TABLE "stock_movements"`);
        await queryRunner.query(`DROP TYPE "public"."stock_movements_type_enum"`);
    }

}
