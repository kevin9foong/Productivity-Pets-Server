import { Request, Response } from 'express';
import { IUser } from '../model/user';

import { generateJwt } from '../service/authservice';

export const getAuthJwt = (req: Request, res: Response) => {
  if (req.user) {
    const token = generateJwt(req.user as IUser);
    return res.json(token);
  }
};
