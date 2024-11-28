import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1732815297459 implements MigrationInterface {
    name = 'InitialMigration1732815297459'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."employees_job_enum" AS ENUM('Motoboy', 'Garçon', 'Pizzaiolo')`);
        await queryRunner.query(`CREATE TABLE "employees" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "phoneNumber" character varying(20) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying(200) NOT NULL, "job" "public"."employees_job_enum" NOT NULL DEFAULT 'Garçon', "companyId" integer, CONSTRAINT "UQ_765bc1ac8967533a04c74a9f6af" UNIQUE ("email"), CONSTRAINT "PK_b9535a98350d5b26e7eb0c26af4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "street" character varying(150) NOT NULL, "number" character varying(7), "city" character varying(150) NOT NULL DEFAULT 'Bom Repouso', "neighborhood" character varying(100) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "phoneNumber" character varying(20) NOT NULL, "addressId" integer, CONSTRAINT "REL_67c4d10f39fdc8a0bbfccdcf73" UNIQUE ("addressId"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pizza" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price_G" character varying NOT NULL, "price_M" character varying NOT NULL, "price_P" character varying NOT NULL, "description" text, "img" text, "companyId" integer, CONSTRAINT "PK_cb1970bd1d17619fd6bc1ec7414" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."pizza_option_size_enum" AS ENUM('Pequena', 'Média', 'Grande')`);
        await queryRunner.query(`CREATE TABLE "pizza_option" ("id" SERIAL NOT NULL, "size" "public"."pizza_option_size_enum" NOT NULL, "price" character varying NOT NULL, "extras" jsonb, "halfAndHalf" boolean NOT NULL DEFAULT false, "halfOptionsId" integer, "pizzaId" integer, CONSTRAINT "PK_9c9c638c805a27325874d32c048" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_sell" ("id" SERIAL NOT NULL, "price" character varying NOT NULL, "productId" integer, CONSTRAINT "PK_ae8bab316dcbfc9467fb0880a49" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."pedido_type_enum" AS ENUM('Pendente', 'Aceito', 'Saiu para a entrega', 'Pronto para retirada', 'Concluído', 'Retirada', 'Entrega', 'Cancelado')`);
        await queryRunner.query(`CREATE TYPE "public"."pedido_status_enum" AS ENUM('Pendente', 'Aceito', 'Saiu para a entrega', 'Pronto para retirada', 'Concluído', 'Retirada', 'Entrega', 'Cancelado')`);
        await queryRunner.query(`CREATE TABLE "pedido" ("id" SERIAL NOT NULL, "type" "public"."pedido_type_enum" NOT NULL DEFAULT 'Entrega', "status" "public"."pedido_status_enum" NOT NULL DEFAULT 'Pendente', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "taxa" character varying(19), "index" character varying(7), "clientId" integer, "companyId" integer, CONSTRAINT "PK_af8d8b3d07fae559c37f56b3f43" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "companies" ("id" SERIAL NOT NULL, "corporateReason" character varying(100) NOT NULL, "fantasyName" character varying(100) NOT NULL, "cnpj" character varying(15) NOT NULL, "phoneNumber" character varying(20) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying(200) NOT NULL, "logo" text, "img" text, CONSTRAINT "UQ_d0af6f5866201d5cb424767744a" UNIQUE ("email"), CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."products_unitofmeasurement_enum" AS ENUM('Unidade', 'Quilograma')`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "quantity" character varying(100) NOT NULL, "initialPrice" character varying(100), "price" character varying(100) NOT NULL, "category" character varying(100) NOT NULL, "supplier" character varying(200), "unitOfMeasurement" "public"."products_unitofmeasurement_enum" NOT NULL DEFAULT 'Unidade', "img" text, "companyId" integer, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedido_products_product_sell" ("pedidoId" integer NOT NULL, "productSellId" integer NOT NULL, CONSTRAINT "PK_0ef3a60ff241981268ac23b8d65" PRIMARY KEY ("pedidoId", "productSellId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2894fb300fbda7836150b514dd" ON "pedido_products_product_sell" ("pedidoId") `);
        await queryRunner.query(`CREATE INDEX "IDX_dd9d3478b2459d412e8b8e13d7" ON "pedido_products_product_sell" ("productSellId") `);
        await queryRunner.query(`CREATE TABLE "pedido_pizza_option_pizza_option" ("pedidoId" integer NOT NULL, "pizzaOptionId" integer NOT NULL, CONSTRAINT "PK_09bb958a66048ec69847dee82c5" PRIMARY KEY ("pedidoId", "pizzaOptionId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a738a4dfba0eb5d41d9ee263a2" ON "pedido_pizza_option_pizza_option" ("pedidoId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c8f393c0b38cb334a5ba99eb30" ON "pedido_pizza_option_pizza_option" ("pizzaOptionId") `);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_c7b030a4514a003d9d8d31a812b" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "FK_67c4d10f39fdc8a0bbfccdcf73a" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pizza" ADD CONSTRAINT "FK_5a3d7785b3f708cb8f426a443b9" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pizza_option" ADD CONSTRAINT "FK_daa855ac045ba4e4d229e38218d" FOREIGN KEY ("halfOptionsId") REFERENCES "pizza"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pizza_option" ADD CONSTRAINT "FK_e8fa28a8238509368f00e1dee50" FOREIGN KEY ("pizzaId") REFERENCES "pizza"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_sell" ADD CONSTRAINT "FK_7a7003820aafb07798fd5a5117a" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedido" ADD CONSTRAINT "FK_c8cc66bb9faf35188437455162f" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedido" ADD CONSTRAINT "FK_0c399d29f177de0cc0358cffe8f" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_47942e65af8e4235d4045515f05" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedido_products_product_sell" ADD CONSTRAINT "FK_2894fb300fbda7836150b514dd6" FOREIGN KEY ("pedidoId") REFERENCES "pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "pedido_products_product_sell" ADD CONSTRAINT "FK_dd9d3478b2459d412e8b8e13d78" FOREIGN KEY ("productSellId") REFERENCES "product_sell"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "pedido_pizza_option_pizza_option" ADD CONSTRAINT "FK_a738a4dfba0eb5d41d9ee263a29" FOREIGN KEY ("pedidoId") REFERENCES "pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "pedido_pizza_option_pizza_option" ADD CONSTRAINT "FK_c8f393c0b38cb334a5ba99eb303" FOREIGN KEY ("pizzaOptionId") REFERENCES "pizza_option"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido_pizza_option_pizza_option" DROP CONSTRAINT "FK_c8f393c0b38cb334a5ba99eb303"`);
        await queryRunner.query(`ALTER TABLE "pedido_pizza_option_pizza_option" DROP CONSTRAINT "FK_a738a4dfba0eb5d41d9ee263a29"`);
        await queryRunner.query(`ALTER TABLE "pedido_products_product_sell" DROP CONSTRAINT "FK_dd9d3478b2459d412e8b8e13d78"`);
        await queryRunner.query(`ALTER TABLE "pedido_products_product_sell" DROP CONSTRAINT "FK_2894fb300fbda7836150b514dd6"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_47942e65af8e4235d4045515f05"`);
        await queryRunner.query(`ALTER TABLE "pedido" DROP CONSTRAINT "FK_0c399d29f177de0cc0358cffe8f"`);
        await queryRunner.query(`ALTER TABLE "pedido" DROP CONSTRAINT "FK_c8cc66bb9faf35188437455162f"`);
        await queryRunner.query(`ALTER TABLE "product_sell" DROP CONSTRAINT "FK_7a7003820aafb07798fd5a5117a"`);
        await queryRunner.query(`ALTER TABLE "pizza_option" DROP CONSTRAINT "FK_e8fa28a8238509368f00e1dee50"`);
        await queryRunner.query(`ALTER TABLE "pizza_option" DROP CONSTRAINT "FK_daa855ac045ba4e4d229e38218d"`);
        await queryRunner.query(`ALTER TABLE "pizza" DROP CONSTRAINT "FK_5a3d7785b3f708cb8f426a443b9"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "FK_67c4d10f39fdc8a0bbfccdcf73a"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_c7b030a4514a003d9d8d31a812b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c8f393c0b38cb334a5ba99eb30"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a738a4dfba0eb5d41d9ee263a2"`);
        await queryRunner.query(`DROP TABLE "pedido_pizza_option_pizza_option"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_dd9d3478b2459d412e8b8e13d7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2894fb300fbda7836150b514dd"`);
        await queryRunner.query(`DROP TABLE "pedido_products_product_sell"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TYPE "public"."products_unitofmeasurement_enum"`);
        await queryRunner.query(`DROP TABLE "companies"`);
        await queryRunner.query(`DROP TABLE "pedido"`);
        await queryRunner.query(`DROP TYPE "public"."pedido_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."pedido_type_enum"`);
        await queryRunner.query(`DROP TABLE "product_sell"`);
        await queryRunner.query(`DROP TABLE "pizza_option"`);
        await queryRunner.query(`DROP TYPE "public"."pizza_option_size_enum"`);
        await queryRunner.query(`DROP TABLE "pizza"`);
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "employees"`);
        await queryRunner.query(`DROP TYPE "public"."employees_job_enum"`);
    }

}
