import express  from 'express';
import { summarys, createSummary, summaryById, update, summaryDelete } from '../Controllers/summaryController.js';


const summarysRouter = express.Router();

summarysRouter.get('/', summarys);
summarysRouter.get("/:id", summaryById);
summarysRouter.post('/', createSummary);
summarysRouter.put("/:id", update);
summarysRouter.delete("/:id", summaryDelete);

export default summarysRouter;