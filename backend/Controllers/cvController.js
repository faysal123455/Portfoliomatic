import dbConnection from '../service/dbconnection.js';
import fs from 'node:fs/promises';
import { getExtensionFromMimeType } from '../service/fileService.js';

import { getCv, createOneCv } from "../repositories/cvRepo.js";
import { getLanguageByListIds } from '../repositories/languageRepo.js';

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
                GROUP_CONCAT(language.id) AS languages_ids
            from cv
            join language on language.cv_id = cv.id
            join summary on summary.cv_id = cv.id
            where cv.id = ?
            GROUP BY cv.id, summary.goal;`,
            [id]);
        
        const languagesList = rows[0].languages_ids;
        const languages = await getLanguageByListIds(languagesList);

        rows = { ...rows.shift(), languages: languages };

        // console.log(rows);

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