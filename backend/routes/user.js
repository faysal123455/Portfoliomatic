import  express  from 'express';
import { users, createUser } from '../Controllers/userController.js';

const usersRouter = express.Router();

usersRouter.get('/', users);
usersRouter.post('/', createUser);

export default usersRouter;