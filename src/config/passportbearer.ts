import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { verify } from '../auth/google';
import dotenv from 'dotenv';

import User from '../model/user';
dotenv.config();

const bearerStrategy = new BearerStrategy((token, done) => {
  verify(token).then(googleUserSub => {
    // payload.sub stores the mongodb user _id information
    const user = User.findById(googleUserSub);
    if (user) {
      return done(null, user, { scope: 'all' });
    } else {
      return done(null, false);
    }
  });
});

export default bearerStrategy;
