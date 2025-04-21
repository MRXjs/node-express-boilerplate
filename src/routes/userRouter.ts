import express from 'express';
import { signup } from '../controller/userController';

const userRouter = express.Router();

userRouter.post('/singup', signup);

export default userRouter;
