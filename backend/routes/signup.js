import express from 'express';
import { signups, createSignup } from '../Controllers/signupController.js';

const signupsRouter = express.Router();

signupsRouter.get('/', signups);
signupsRouter.post('/', createSignup);

export default signupsRouter;