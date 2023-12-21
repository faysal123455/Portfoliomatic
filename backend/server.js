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
import languagesRouter from './routes/language.js';
import archivmentsRouter from './routes/archivment.js';
import skillsRouter from './routes/skill.js';
import educationsRouter from './routes/education.js';
import worksRouter from './routes/work.js';
import cookieParser from 'cookie-parser';
import personalInfosRouter from './routes/personalInfos.js';

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

// Define routes
router.use('/api/users', usersRouter);
router.use('/api/cvs', cvsRouter);
router.use('/api/summarys', summarysRouter);
router.use('/api/languages', languagesRouter);
router.use('/api/archivments', archivmentsRouter);
router.use('/api/skills', skillsRouter);
router.use('/api/educations', educationsRouter);
router.use('/api/works', worksRouter);
router.use('/api/personalinfos', personalInfosRouter);

app.use(router);

const options = {
    key: await fs.readFile('ca/key.pem'),
    cert: await fs.readFile('ca/cert.pem'),
};

const PORT = 3000;

const server = config.environment === 'dev' ? https.createServer(options, app) : http.createServer(app);

export default server;