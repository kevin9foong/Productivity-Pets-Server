import { PassportStatic } from 'passport';
import bearerStrategy from './passportbearer';
import jwtStrategy from './passportjwt';

export default (passport: PassportStatic) => {
  passport.use(bearerStrategy);
  passport.use(jwtStrategy);
};
