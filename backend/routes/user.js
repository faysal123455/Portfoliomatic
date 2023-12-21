import express from 'express';
import {
    users,
    createUser,
    signupUser,
    checkUserLogin,
} from "../Controllers/userController.js";

const usersRouter = express.Router();

usersRouter.get('/', users);
usersRouter.post('/', createUser);

usersRouter.post('/login', checkUserLogin);
usersRouter.post('/signup', signupUser);

export default usersRouter;