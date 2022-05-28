import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePermissionsRolesTable1653766144439
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "permissions_roles",
        columns: [
          {
            name: "role_id",
            type: "uuid",
          },
          {
            name: "permission_id",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "FK_Permissions",
            referencedTableName: "permissions",
            referencedColumnNames: ["id"],
            columnNames: ["permission_id"],
            onDelete: "CASCADE",
            onUpdate: "SET NULL",
          },
          {
            name: "FK_Roles",
            referencedTableName: "roles",
            referencedColumnNames: ["id"],
            columnNames: ["role_id"],
            onDelete: "CASCADE",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("permissions_roles");
  }
}
