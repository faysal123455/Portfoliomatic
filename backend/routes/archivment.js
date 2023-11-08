import express  from 'express';
import { archivments, createArchivment, updateArchivment, deleteArchivment } from '../Controllers/archivmentController.js';

const archivmentsRouter = express.Router();

archivmentsRouter.get('/', archivments);
archivmentsRouter.post('/', createArchivment);
archivmentsRouter.put('/:id', updateArchivment);
archivmentsRouter.delete('/:id', deleteArchivment);


export default archivmentsRouter;