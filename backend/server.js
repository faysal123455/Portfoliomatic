import fs from 'fs/promises';
import express from 'express';
import https from 'https';
import http from 'http';
import cors from 'cors';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import config from './config/config.js';



import usersRouter from './routes/user.js';
import cvsRouter from './routes/cv.js';
import summarysRouter from './routes/summary.js';
import citysRouter from './routes/city.js';
import languagesRouter from './routes/language.js';
import contactsRouter from './routes/contact.js';
import archivmentsRouter from './routes/archivment.js';
import skillsRouter from './routes/skill.js';
import educationsRouter from './routes/education.js';
import worksRouter from './routes/work.js';
import cookieParser from 'cookie-parser';
import personalInfosRouter from './routes/personalInfos.js';
// import getbillsRouter from './routes/nodemail.js';



const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
router.use(express.static('public'));

// Define routes
router.use('/api/users', usersRouter);
router.use('/api/cvs', cvsRouter);
router.use('/api/summarys', summarysRouter);
router.use('/api/languages', languagesRouter);
router.use('/api/contacts', contactsRouter);
router.use('/api/archivments', archivmentsRouter);
router.use('/api/skills', skillsRouter);
router.use('/api/educations', educationsRouter);
router.use('/api/works', worksRouter);
router.use('/api/citys', citysRouter);
router.use('/api/personalinfos', personalInfosRouter);

// router.use('/api/getbills', getbillsRouter);



app.use(router);

const options = {
    key: await fs.readFile('ca/key.pem'),
    cert: await fs.readFile('ca/cert.pem'),
};

const PORT = 3000;

//creatiojn  du serveur http

const server = config.environment === 'dev'
    ? https.createServer(options, app)
    : http.createServer(app);

export default server;