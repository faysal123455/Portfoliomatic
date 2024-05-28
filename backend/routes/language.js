import express from 'express';
import { languages, createLanguage, languageById, update, languageDelete } from '../Controllers/languageController.js';

const languagesRouter = express.Router();

languagesRouter.get('/', languages);
languagesRouter.get("/:id", languageById);
languagesRouter.post('/', createLanguage);
languagesRouter.put("/:id", update);
languagesRouter.delete("/:id", languageDelete);

export default languagesRouter;
