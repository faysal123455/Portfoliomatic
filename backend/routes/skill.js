import express from 'express';
import { skills, createSkill, skillById, update, skillDelete } from '../Controllers/skillController.js';

const skillsRouter = express.Router();

skillsRouter.get('/', skills);
skillsRouter.get("/:id", skillById);
skillsRouter.post('/', createSkill);
skillsRouter.put("/:id", update);
skillsRouter.delete("/:id", skillDelete);

export default skillsRouter;