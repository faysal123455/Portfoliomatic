import * as fs from 'node:fs/promises';
import express from 'express';
import https from 'node:https';
import * as dotenv from 'dotenv';
import usersRouter from './routes/user.js';
import cvsRouter from './routes/cv.js';
import summarysRouter from './routes/summary.js';
import languagesRouter from './routes/language.js';
import archivmentsRouter from './routes/archivment.js';
import skillsRouter from './routes/skill.js';
import educationsRouter from './routes/education.js';
import worksRouter from './routes/work.js';
import cors from 'cors';


router.use(cors());
router.use(express.json());

router.use('/api/users', usersRouter)
router.use('/api/cvs', cvsRouter)
router.use('/api/summarys', summarysRouter)
router.use('/api/languages', languagesRouter)
router.use('/api/archivments', archivmentsRouter)
router.use('/api/skills', skillsRouter)
router.use('/api/educations', educationsRouter)
router.use('/api/works', worksRouter)

const options = {
    key: await fs.readFile('ca/key.pem'),
    cert: await fs.readFile('ca/cert.pem'),
};

const server = https.createServer(options, app);

export default server;