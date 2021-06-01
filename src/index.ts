// dotenv
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoutes from './routes/auth';
import passport from 'passport';

import passportConfig from './passport/passport';
import corsOptions from './config/corsconfig';

dotenv.config();

const MONGODB_CONNECTION_KEY = process.env.MONGODB_CONNECTION_KEY!;

const app = express();
// app.use(cors(corsOptions));
app.use(cors());
// body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// passport auth
passportConfig(passport);
// TODO: remove session use
// app.use(passport.session());
// passport.serializeUser((user: any, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user: any, done) => {
//   done(null, user);
// });
app.use(passport.initialize());

app.use('/auth', authRoutes);
// app.get('/', passport.authenticate('jwt'), (req: any, res) =>
//   res.send('<h1>Dummy</h1>')
// );

// application routes

// database connection
mongoose
  .connect(MONGODB_CONNECTION_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));
