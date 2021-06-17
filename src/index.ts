// dotenv
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoutes from './routes/auth';
import passport from 'passport';

import passportConfig from './passport/passport';

dotenv.config();

const MONGODB_CONNECTION_KEY = process.env.MONGODB_CONNECTION_KEY!;

const app = express();
app.use(cors());
// body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// passport auth
passportConfig(passport);

app.use(passport.initialize());

app.use('/auth', authRoutes);

// application routes

// database connection
mongoose
  .connect(MONGODB_CONNECTION_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));
