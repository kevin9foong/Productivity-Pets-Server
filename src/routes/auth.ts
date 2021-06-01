import { Router } from 'express';
import passport from 'passport';
import { getAuthJwt } from '../controllers/authcontroller';

const router = Router();

// validate Google access token and return JWT if valid.
router.get('/google', passport.authenticate('bearer', { session: false }), getAuthJwt);

export default router;
