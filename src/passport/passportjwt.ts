import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import dotenv from 'dotenv';

import User from '../model/user';
dotenv.config();

// need to add access + refresh token
const SYMMETRIC_JWT_SECRET = process.env.SYMMETRIC_JWT_SECRET;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SYMMETRIC_JWT_SECRET
  //   issuer
  //   audience
};

// strategy used to verify issued JWT token
// TODO: WIP on this jwt strat
const jwtStrategy = new JwtStrategy(options, (payload, done) => {
  // payload.sub stores the mongodb user _id information
  const user = User.findOne({ googleId: payload.sub });
  if (user) {
    return done(null, user);
  } else {
    return done(null, false);
  }
});

export default jwtStrategy;
