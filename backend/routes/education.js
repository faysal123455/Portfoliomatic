import express  from 'express';
import { educations, createEducation, educationById, update, educationDelete } from '../Controllers/educationController.js';

const educationsRouter = express.Router();

educationsRouter.get('/', educations);
educationsRouter.get("/:id", educationById);
educationsRouter.post('/', createEducation);
educationsRouter.put("/:id", update);
educationsRouter.delete("/:id", educationDelete);

export default educationsRouter;