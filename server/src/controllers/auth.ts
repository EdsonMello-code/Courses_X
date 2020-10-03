import { Request, Response } from 'express';

import knex from '../database/connections';
import jwt from '../utils/jwt';

interface User {
  id: number;
  email: string;
  name: string;
  password: string;
}

interface InfoRequest {
  email: string;
  password: string;
}

export default {
  async authenticate(request: Request, response: Response) {
    const { email, password }: InfoRequest = request.body;

    const allInfoUser: Array<User> = await knex('users')
      .select('*')
      .where('users.email', email);

    const user = allInfoUser[0];

    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    const passwordInDb = user.password;
    if (password !== passwordInDb) {
      return response.status(400).json({ error: 'Invalid password' });
    }

    const token = jwt({ id: user.id });

    return response.json({ user, token });
  },

};
