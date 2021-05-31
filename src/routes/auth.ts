import { Router } from 'express';
import passport from 'passport';

import {
  getAuthJwt
} from '../controllers/authcontroller';

const router = Router();

router.post('/auth', passport.authenticate('bearer', { session: false }),
  getAuthJwt);

export default router;
