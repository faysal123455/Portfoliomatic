import dbConnection from '../service/dbconnection.js';
import fs from 'node:fs/promises';
import { getExtensionFromMimeType } from '../service/fileService.js';

import { getCv, createOneCv } from "../repositories/cvRepo.js";
import { getLanguageByListIds } from '../repositories/languageRepo.js';
import { getSkillByListIds } from '../repositories/skillRepo.js';
import { getArchivmentByListIds } from '../repositories/archivmentRepo.js';
import { getEducationByListIds } from '../repositories/educationRepo.js';
import { getWorkByListIds } from '../repositories/workRepo.js';

const cvs = (req, res) => {
    getCv().then(data => {
        return res.status(200).json({
            status: 200,
            message: "all good for cv",
            data: data,
        });
    })
}


const cvById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows, fields] = await dbConnection.query("select * from cv where id = ?", [id]);
        res.json({
            data: rows
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: "error"
        });
    }
};

const createTemplateCv = async (req, res) => {
    try {
        const { id } = req.params;
        // const [rows, fields] = await dbConnection.query("select cv.*, language.name as languageName, language.level as languageLevel, summary.goal from cv LEFT JOIN language ON cv.id = language.cv_id JOIN summary ON cv.id = summary.cv_id where cv.id = ?", [id]);
        let [rows, fields] = await dbConnection.query(`
         select
        cv.*,
        summary.goal,
        contact.Telephone,
        contact.social_media1,
        contact.social_media2,
        GROUP_CONCAT(DISTINCT language.id) AS languages_ids,
        GROUP_CONCAT(DISTINCT skill.id) AS skills_ids,
        GROUP_CONCAT(DISTINCT archivment.id) AS archivments_ids,
        GROUP_CONCAT(DISTINCT education.id) AS educations_ids,
        GROUP_CONCAT(DISTINCT work.id) AS works_ids
        from cv
        left join language on language.cv_id = cv.id
        left join summary on summary.cv_id = cv.id
        left join skill on skill.cv_id = cv.id
        left join archivment on archivment.cv_id = cv.id
        left join education on education.cv_id = cv.id
        left join work on work.cv_id = cv.id
        left join contact on contact.cv_id = cv.id
        where cv.id = ?
        GROUP BY cv.id, summary.goal, contact.id;
            `,
            [id]);
        
        const languagesList = rows[0].languages_ids;
        const languages = await getLanguageByListIds(languagesList);

        const skillsList = rows[0].skills_ids;
        const skills = await getSkillByListIds(skillsList);

        const archivmentsList = rows[0].archivments_ids;
        const archivments = await getArchivmentByListIds(archivmentsList);

        const educationsList = rows[0].educations_ids;
        const educations = await getEducationByListIds(educationsList);

        const worksList = rows[0].works_ids;
        const works = await getWorkByListIds(worksList);

        rows = { ...rows.shift(), languages: languages, skills: skills, archivments: archivments, educations: educations, works: works };

        console.log(rows);

        res.json({
            data: rows,
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: "error"
        });
    }
};



const createCv = async (req, res) => {
    const file = req.files.shift();
    console.log(file)
    const fullFileName = `${file.path}.${getExtensionFromMimeType(file.mimetype)}`;
    const fileName = `${file.filename}.${getExtensionFromMimeType(file.mimetype)}`;

    await fs.rename(file.path, fullFileName);

    req.body = { ...req.body, image: fileName };
    console.log(req.body);

    createOneCv(req.body).then(data => {
        return res.status(200).json({
            status: 200,
            message: "all good for cv",
            data: data,
        });
    })
}


const update = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows, fields] = await dbConnection.query("select * from cv where id = ?", [id]);
        res.json({
            data: rows
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: "error"
        });
    }
};



export { cvs, createCv, cvById, createTemplateCv }