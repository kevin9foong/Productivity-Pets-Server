import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { verify } from '../auth/google';
import dotenv from 'dotenv';

import User, { IUser } from '../model/user';
dotenv.config();

// strategy used to verify google access token
const bearerStrategy = new BearerStrategy((token, done) => {
  verify(token).then(googleUser => {
    if (!googleUser) {
      done(null, false);
    }
    User.findOne({ googleId: googleUser.data.id }, (err: Error | undefined | null, user: IUser) => {
      if (!err) {
        if (user) {
          return done(null, user, { scope: 'all' });
        } else {
          const newUser = new User({
            googleId: googleUser.data.id,
            name: googleUser.data.name,
            avatar: googleUser.data.picture
          });
          newUser.save().then(
            user => done(null, user)
          );
        }
      } else {
        console.log(err);
      }
    });
  });
});

export default bearerStrategy;
