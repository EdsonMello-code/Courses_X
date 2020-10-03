import { Router } from 'express';

import User from './controllers/User';
import Cousers from './controllers/Cousers';
import auth from './controllers/auth';
import authMiddleware from './middlewares/auth';

const router = Router();

router
  .post('/users', User.createUser)
  .get('/users', User.listUsers)
  .put('/users/:id', User.updateUser);

router
  .post('/cousers', authMiddleware, Cousers.createCousers)
  .get('/cousers', authMiddleware, Cousers.listCousers)
  .put('/cousers/:id', authMiddleware, Cousers.updateCousers);

router
  .post('/authenticate', auth.authenticate);

export default router;
