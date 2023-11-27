import express from 'express';
import {
    users,
    createUser,
    loginUser,
    signupUser,
} from "../Controllers/userController.js";

const usersRouter = express.Router();

usersRouter.get('/', users);
usersRouter.post('/', createUser);
usersRouter.post('/login', loginUser);
usersRouter.post('/signup', signupUser);

export default usersRouter;