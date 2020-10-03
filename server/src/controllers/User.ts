import { Request, Response } from 'express';

import knex from '../database/connections';
import jwt from '../utils/jwt';

interface User {
  id: number;
  email: string;
  name: string;
  createAt: Date;
}

export default {
  async createUser(request: Request, response: Response) {
    const { name, email, password } = request.body;

    if (!name || !email || !password) {
      return response
        .status(401)
        .json({ message: 'All data has be infoted' });
    }

    try {
      await knex('users').insert({ name, email, password });
      const user: User[] = await knex('users').select('*');
      const token = jwt({ id: user[0].id });
      return response.status(201).json({ user: user[0], token });
    } catch (error) {
      return response.status(400).json({ message: 'Operation invalid' });
    }
  },

  async listUsers(request: Request, response: Response) {
    try {
      const user = await knex('users')
        .select('*');

      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({ message: 'Error in request' });
    }
  },

  async updateUser(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const { id } = request.params;
    try {
      const user = await knex('users')
        .where('users.id', id)
        .update({ email, name, password });

      return response.status(200).json(user);
    } catch (error) {
      return response.status(401).json({ message: 'bad request' });
    }
  },
};
