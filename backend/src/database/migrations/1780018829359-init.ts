import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1780018829359 implements MigrationInterface {
    name = 'Init1780018829359'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."stock_products_unit_enum" AS ENUM('kg', 'g', 'l', 'ml', 'un')`);
        await queryRunner.query(`CREATE TABLE "stock_products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "unit" "public"."stock_products_unit_enum" NOT NULL, "currentStock" numeric(10,3) NOT NULL DEFAULT '0', "minimumStock" numeric(10,2) NOT NULL DEFAULT '0', "yieldRate" numeric(10,2) NOT NULL DEFAULT '1', "active" boolean NOT NULL DEFAULT true, "costPrice" numeric(10,2) NOT NULL DEFAULT '1', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7a0cb9a59be9f5833a264cd1e60" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "stock_products"`);
        await queryRunner.query(`DROP TYPE "public"."stock_products_unit_enum"`);
    }

}
