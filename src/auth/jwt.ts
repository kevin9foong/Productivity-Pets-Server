import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { IUser } from '../model/user';
dotenv.config();

const SYMMETRIC_JWT_SECRET = process.env.SYMMETRIC_JWT_SECRET!;

// generates a JWT based on the user (user._id is the google sub id)
export const generateJwt = (user: IUser) => {
  // const expiresIn = '1 hour';
  const secret = SYMMETRIC_JWT_SECRET;

  const token = jwt.sign({}, secret, {
    // expiresIn: expiresIn,
    subject: user.googleId.toString()
  });

  return token;
};
