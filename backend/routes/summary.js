import express  from 'express';
import { summarys, createSummary } from '../Controllers/summaryController.js';


const summarysRouter = express.Router();

summarysRouter.get('/', summarys);
summarysRouter.post('/', createSummary);

export default summarysRouter;