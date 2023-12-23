import { Router } from 'express';
import { check } from 'express-validator';

const authRouter = Router();

import { login } from "../controller/auth.controller.js";

authRouter.post('/login',[

],login);

export default authRouter;
