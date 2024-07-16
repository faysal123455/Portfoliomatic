import express  from 'express';
import { works, createWork, workById, update, workDelete } from '../Controllers/workController.js';

const worksRouter = express.Router();

worksRouter.get('/', works);
worksRouter.get("/:id", workById);
worksRouter.post('/', createWork);
worksRouter.put("/:id", update);
worksRouter.delete("/:id", workDelete);

export default worksRouter;