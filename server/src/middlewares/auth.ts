import { NextFunction, Request, Response } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';

import authConfing from '../config/auth.json';

interface Decoded {
  id: number;
}

// eslint-disable-next-line consistent-return
export default (request: Request, response: Response, next: NextFunction) => {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    return response.status(401).json({ error: 'No token provided' });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return response.status(402).json({ error: 'Token error' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return response.status(401).json({ error: 'Token molformatted' });
  }

  jwt.verify(token, authConfing.secret, (err: VerifyErrors, decoded: Decoded) => {
    if (err) return response.status(401).json({ error: 'Token invalid' });

    request.userId = decoded.id;
    return next();
  });
};
