import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';
import dotenv from 'dotenv';
dotenv.config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL!;

const options = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: GOOGLE_CALLBACK_URL // url to be redirected to once client logs in successfully.
};

const googleStrategy = new GoogleStrategy(
  options,
  (accessToken, refreshToken, profile, done) => {
    return done(null, mapGoogleProfileToUser(profile));
  }
);

const mapGoogleProfileToUser = (googleProfile: Profile) => {
  return {
    googleId: googleProfile.id,
    name: googleProfile.displayName,
    avatar: googleProfile.photos ? googleProfile.photos[0].value : ''
  };
};

export default googleStrategy;
