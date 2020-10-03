import jwt from 'jsonwebtoken';
import authConfig from '../config/auth.json';

interface Params {
  id: number;
}
export default function (params: Params) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}
