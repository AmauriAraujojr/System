import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1715631285818 implements MigrationInterface {
    name = 'InitialMigration1715631285818'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "companies" ("id" SERIAL NOT NULL, "corporateReason" character varying(100) NOT NULL, "fantasyName" character varying(100) NOT NULL, "cnpj" character varying(15) NOT NULL, "phoneNumber" character varying(20) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying(200) NOT NULL, CONSTRAINT "UQ_d0af6f5866201d5cb424767744a" UNIQUE ("email"), CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."employees_job_enum" AS ENUM('Motoboy', 'Garçon', 'Pizzaiolo')`);
        await queryRunner.query(`CREATE TABLE "employees" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "phoneNumber" character varying(20) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying(200) NOT NULL, "job" "public"."employees_job_enum" NOT NULL DEFAULT 'Motoboy', "companyId" integer, CONSTRAINT "UQ_765bc1ac8967533a04c74a9f6af" UNIQUE ("email"), CONSTRAINT "PK_b9535a98350d5b26e7eb0c26af4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_c7b030a4514a003d9d8d31a812b" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_c7b030a4514a003d9d8d31a812b"`);
        await queryRunner.query(`DROP TABLE "employees"`);
        await queryRunner.query(`DROP TYPE "public"."employees_job_enum"`);
        await queryRunner.query(`DROP TABLE "companies"`);
    }

}
