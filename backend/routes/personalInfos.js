import express from 'express';
import { createPersonalInfos } from '../Controllers/personalInfosController.js';
import config from '../config/config.js';

const personalInfosRouter = express.Router();

personalInfosRouter.post('/', config.multer.any(), createPersonalInfos);

export default personalInfosRouter;