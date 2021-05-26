import { Request, Response } from 'express';
import passport from 'passport';

import User, { IUser } from '../model/user';
import { IUserDto } from '../service/usertypes';
import { createUser } from '../service/userservice';
import { generateJwt } from '../service/authservice';

// TODO: for future non oauth logins
export const postLogin = (req: Request, res: Response) => {
  // login logic here.
  res.send('Received');
};

export const getGoogleOauthSignIn = passport.authenticate('google', {
  scope: ['profile']
});

// Returns JWT token as json response when login is successful.
// TODO: fix the any type assignments
export const getGoogleOauthCallback = (req: Request, res: Response) => {
  // if user does not exist, create new user
  // else return jwt of existing user
  if (req.user) {
    return User.findOne({
      googleId: (req.user as IUserDto).googleId
    })
      .then((user) => {
        if (user) {
          return handleAuthenticated(req, res, user);
        } else {
          console.log(req.user);
          return createUser(req.user as IUserDto)
            .then((user: any) => handleAuthenticated(req, res, user))
            .catch((err: any) => console.log(err));
        }
      })
      .catch((err: any) => console.log(err));
  }
};

const handleAuthenticated = (req: Request, res: Response, user: IUser) => {
  const token = generateJwt(user);
  return res.json(token);
};
