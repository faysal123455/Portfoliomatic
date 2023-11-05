import express  from 'express';
import { archivments, createArchivment } from '../Controllers/archivmentController.js';

const archivmentsRouter = express.Router();

archivmentsRouter.get('/', archivments);
archivmentsRouter.post('/', createArchivment);

export default archivmentsRouter;