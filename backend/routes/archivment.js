import express from 'express';
import { archivments, createArchivment, updateArchivment } from '../Controllers/archivmentController.js';

const archivmentsRouter = express.Router();

archivmentsRouter.get('/', archivments);
archivmentsRouter.post('/', createArchivment);
archivmentsRouter.put('/:id', updateArchivment);



export default archivmentsRouter;