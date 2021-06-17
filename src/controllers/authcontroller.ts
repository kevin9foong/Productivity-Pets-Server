import { Request, Response } from 'express';
import { IUser } from '../model/user';

import { generateJwt } from '../auth/jwt';

export const getAuthJwt = (req: Request, res: Response) => {
  if (req.user) {
    const user = req.user as IUser;
    const token = generateJwt(user);
    return res.json({
      userToken: token,
      userId: user.googleId,
      userName: user.name,
      userAvatar: user.avatar
    });
  }
};
