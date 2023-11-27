import  express  from 'express';
import { cvs, createCv, cvById } from '../Controllers/cvController.js';


const cvsRouter = express.Router();

cvsRouter.get('/', cvs);
cvsRouter.get("/:id", cvById);
cvsRouter.post('/', createCv);


export default cvsRouter;