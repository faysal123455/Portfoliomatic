import  express  from 'express';
import { cvs, createCv, cvById } from '../Controllers/cvController.js';
import config from '../config/config.js';

const cvsRouter = express.Router();

cvsRouter.get('/', cvs);
cvsRouter.get("/:id", cvById);
cvsRouter.post('/', config.multer.any(), createCv);


export default cvsRouter;