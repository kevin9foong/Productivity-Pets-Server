import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { IUser } from '../model/user';
dotenv.config();

const SYMMETRIC_JWT_SECRET = process.env.SYMMETRIC_JWT_SECRET!;

export const generateJwt = (user: IUser) => {
  const expiresIn = '1 hour';
  const secret = SYMMETRIC_JWT_SECRET;

  const token = jwt.sign({}, secret, {
    expiresIn: expiresIn,
    subject: user._id.toString()
  });

  return token;
};
