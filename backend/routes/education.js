import express  from 'express';
import { educations, createEducation } from '../Controllers/educationController.js';

const educationsRouter = express.Router();

educationsRouter.get('/', educations);
educationsRouter.post('/', createEducation);

export default educationsRouter;