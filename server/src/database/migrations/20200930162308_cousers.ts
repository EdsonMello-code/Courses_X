import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('cousers', (table) => {
    table
      .increments('id')
      .primary();
    table
      .string('lang')
      .notNullable();
    table
      .string('title')
      .notNullable();
    table
      .integer('user_id')
      .notNullable();
    table
      .timestamp('createAt')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .foreign('user_id')
      .references('id')
      .inTable('users');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('cousers');
}
