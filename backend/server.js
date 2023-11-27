import fs from 'fs/promises';
import express from 'express';
import https from 'https';
import cors from 'cors';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'



import usersRouter from './routes/user.js';
import cvsRouter from './routes/cv.js';
import summarysRouter from './routes/summary.js';
import languagesRouter from './routes/language.js';
import archivmentsRouter from './routes/archivment.js';
import skillsRouter from './routes/skill.js';
import educationsRouter from './routes/education.js';
import worksRouter from './routes/work.js';
import cookieParser from 'cookie-parser';

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Define routes
router.use('/api/users', usersRouter);
router.use('/api/cvs', cvsRouter);
router.use('/api/summarys', summarysRouter);
router.use('/api/languages', languagesRouter);
router.use('/api/archivments', archivmentsRouter);
router.use('/api/skills', skillsRouter);
router.use('/api/educations', educationsRouter);
router.use('/api/works', worksRouter);

app.use(router);

const options = {
    key: await fs.readFile('ca/key.pem'),
    cert: await fs.readFile('ca/cert.pem'),
};

const PORT = 3000;

const server = https.createServer(options, app);


export default server;
