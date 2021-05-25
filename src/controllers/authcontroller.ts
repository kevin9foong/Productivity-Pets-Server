import { Request, Response } from 'express';

export const postLogin = (req: Request, res: Response) => {
  // login logic here.
  res.send('Received');
};
