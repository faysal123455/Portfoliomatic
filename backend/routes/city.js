import express from 'express';

import { citys, createCity } from '../Controllers/cityController.js';

const citysRouter = express.Router();


citysRouter.get('/', citys);
citysRouter.post('/', createCity);


export default citysRouter;
