import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUnitCostToStockMovements1789522296146 implements MigrationInterface {
    name = 'AddUnitCostToStockMovements1789522296146'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stock_movements" ADD "unitCost" numeric(10,3)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stock_movements" DROP COLUMN "unitCost"`);
    }

}
