import { Request, Response } from 'express';
import passport from 'passport';

export const postLogin = (req: Request, res: Response) => {
  // login logic here.
  res.send('Received');
};

export const getGoogleOauthSignIn = passport.authenticate('google', {
  scope: ['profile']
});

// return JWT to frontend
export const getGoogleOauthCallback = (req: Request, res: Response) => {
  // when login is successful, return JWT.
  res.redirect('/');
};
