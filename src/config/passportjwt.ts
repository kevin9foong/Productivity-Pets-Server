import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import dotenv from 'dotenv';

import User from '../model/User';
dotenv.config();

const symmetricSecret = process.env.SYMMETRIC_JWT_SECRET;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: symmetricSecret
  //   issuer
  //   audience
};

// TODO: WIP on this jwt strat
const jwtStrategy = new JwtStrategy(options, (payload, done) => {
  // payload.sub stores the user id information
  const user = User.findById(payload.sub);
  if (user) {
    return done(null, user);
  } else {
    return done(null, false);
  }
});

export default jwtStrategy;
