import  express  from 'express';
import { cvs, createCv } from '../Controllers/cvController.js';


const cvsRouter = express.Router();

cvsRouter.get('/', cvs);
cvsRouter.post('/', createCv);

export default cvsRouter;