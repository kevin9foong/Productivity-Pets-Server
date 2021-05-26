import { PassportStatic } from 'passport';
import googleStrategy from './passportgoogleoauth20';
import jwtStrategy from './passportjwt';

export default (passport: PassportStatic) => {
  passport.use(googleStrategy);
  passport.use(jwtStrategy);
};
