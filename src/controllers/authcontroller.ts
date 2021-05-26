import { Request, Response } from 'express';
import passport from 'passport';

export const postLogin = (req: Request, res: Response) => {
  // login logic here.
  res.send('Received');
};

export const getGoogleOauthSignIn = passport.authenticate('google', {
  scope: ['profile']
});

// TODO: use JWT in the future for frontend
// when login is successful, return JWT.
export const getGoogleOauthCallback = (req: Request, res: Response) => {
  res.redirect('/');
};
