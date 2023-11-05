import express  from 'express';
import { works, createWork } from '../Controllers/workController.js';

const worksRouter = express.Router();

worksRouter.get('/', works);
worksRouter.post('/', createWork);

export default worksRouter;