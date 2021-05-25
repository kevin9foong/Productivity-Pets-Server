import { Router } from 'express';
import { postLogin } from '../controllers/authcontroller';

const router = Router();

router.post('/login', postLogin);

export default router;
