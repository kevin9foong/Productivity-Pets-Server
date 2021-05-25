import express from 'express';
import mongoose from 'mongoose';

import authRoutes from './routes/auth';

const MONGODB_CONNECTION_KEY = process.env.MONGODB_CONNECTION_KEY!;

const app = express();

// body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes);

mongoose
  .connect(MONGODB_CONNECTION_KEY)
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));
