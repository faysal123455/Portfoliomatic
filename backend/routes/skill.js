import express from 'express';
import { skills, createSkill } from '../Controllers/skillController.js';

const skillsRouter = express.Router();

skillsRouter.get('/', skills);
skillsRouter.post('/', createSkill);

export default skillsRouter;