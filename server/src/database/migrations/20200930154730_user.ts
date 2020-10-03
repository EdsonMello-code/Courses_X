import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table
      .increments('id')
      .primary()
      .notNullable();

    table
      .string('name')
      .notNullable();

    table
      .string('email')
      .unique()
      .notNullable();

    table
      .string('password')
      .notNullable();

    table.timestamp('createAt')
      .defaultTo(knex.fn.now())
      .notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}
