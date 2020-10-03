import * as Knex from 'knex';

// eslint-disable-next-line import/prefer-default-export
export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    { name: 'Edson', email: 'edson@gmail.com', password: 'root' },
    { name: 'lucas', email: 'lucas@gmail.com', password: 'root' },
  ]);
}
