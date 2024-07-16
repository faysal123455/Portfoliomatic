import express from 'express';
import {
    users,
    // createUser,
    updateUser,
    signupUser,
    checkUserLogin,
    deleteUserController,
} from "../Controllers/userController.js";

const usersRouter = express.Router();

usersRouter.get('/', users);
// usersRouter.post('/', createUser);
usersRouter.delete("/:userId", deleteUserController);
usersRouter.put('/:id', updateUser);

usersRouter.post('/login', checkUserLogin);
usersRouter.post('/signup', signupUser);

export default usersRouter;