import {MigrationInterface, QueryRunner} from "typeorm";

export class user1576577857570 implements MigrationInterface {
    name = 'user1576577857570'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `adreess` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `user`", undefined);
    }

}
