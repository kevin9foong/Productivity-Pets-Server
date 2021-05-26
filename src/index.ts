// dotenv
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoutes from './routes/auth';
import passport from 'passport';

import googleOauthPassport from './config/passportgoogleoauth20';

dotenv.config();

const MONGODB_CONNECTION_KEY = process.env.MONGODB_CONNECTION_KEY!;

const app = express();

// body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// passport auth
googleOauthPassport(passport);
passport.serializeUser((user: any, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.get('/', (req: any, res) => res.send('<h1>Dummy</h1>'));

// application routes

// database connection
mongoose
  .connect(MONGODB_CONNECTION_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));
