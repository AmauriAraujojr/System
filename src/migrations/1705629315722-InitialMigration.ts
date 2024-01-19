import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1705629315722 implements MigrationInterface {
    name = 'InitialMigration1705629315722'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "companies" ("id" SERIAL NOT NULL, "corporateReason" character varying(100) NOT NULL, "fantasyName" character varying(100) NOT NULL, "cnpj" character varying(15) NOT NULL, "phoneNumber" character varying(20) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying(200) NOT NULL, CONSTRAINT "UQ_d0af6f5866201d5cb424767744a" UNIQUE ("email"), CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "companies"`);
    }

}
