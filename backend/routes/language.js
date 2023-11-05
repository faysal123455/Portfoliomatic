import express from 'express';
import { languages, createLanguage } from '../Controllers/languageController.js';

const languagesRouter = express.Router();

languagesRouter.get('/', languages);
languagesRouter.post('/', createLanguage);

export default languagesRouter;