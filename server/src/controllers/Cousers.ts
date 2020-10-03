import { Request, Response } from 'express';

import knex from '../database/connections';

interface Cousers {
  title: string;
  userId: string;
  lang: string;
}

export default {
  async createCousers(request: Request, response: Response) {
    const { title, userId, lang }: Cousers = request.body;

    if (!title || !userId || !lang) {
      return response.status(400).send({ error: 'All data has be infomated' });
    }

    try {
      await knex('cousers').insert({ title, lang, user_id: request.userId });
      const user = await knex('cousers')
        .where('cousers.user_id', request.userId)
        .innerJoin('users', 'users.id', '=', 'cousers.user_id')
        .select('lang', 'cousers.id as cousers_id', 'cousers.user_id', 'title', 'name', 'email');

      return response.status(201).json(user);
    } catch (error) {
      return response.send(400).send({ error: 'Not created user' });
    }
  },
  async listCousers(request: Request, response: Response) {
    try {
      const cousers = await knex('cousers')
        .select('*')
        .where('cousers.user_id', request.userId);

      return response.status(200).json(cousers);
    } catch (error) {
      return response.status(400).send({ error: 'Can not listed user' });
    }
  },

  async updateCousers(request: Request, response: Response) {
    const { lang, title } = request.body;
    const { id } = request.params;

    try {
      const user = await knex('cousers')
        .where('cousers.id', id)
        .update({ lang, title });

      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({ error: 'Not updated user' });
    }
  },
};
