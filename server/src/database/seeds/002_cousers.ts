import * as Knex from 'knex';

// eslint-disable-next-line import/prefer-default-export
export async function seed(knex: Knex): Promise<void> {
  await knex('cousers').del();

  await knex('cousers').insert([
    { lang: 'js', title: 'O js', user_id: 1 },
    { lang: 'python', title: 'O pyhton', user_id: 1 },
  ]);
}
