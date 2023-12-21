import dbConnection from '../service/dbconnection.js';

import { createOnePersonalInfos } from "../repositories/personalInfosRepo.js";
import fs from 'node:fs/promises';
import { getExtensionFromMimeType } from '../service/fileService.js';



const createPersonalInfos = async (req, res) => {
    // console.log(req.body, req.files.shift());

    /*
        {
        fieldname: 'image',
        originalname: 'pexels-kindel-media-6774450.jpg',
        encoding: '7bit',
        mimetype: 'image/jpeg',
        destination: 'public/img/',
        filename: 'a6643525f3a0d3a5e4a69891724a7698',
        path: 'public\\img\\a6643525f3a0d3a5e4a69891724a7698',
        size: 1048742
    }
    */
    const file = req.files.shift();
    const fullFileName = `${file.path}.${getExtensionFromMimeType(file.mimetype)}`;
    const fileName = `${file.filename}.${getExtensionFromMimeType(file.mimetype)}`;

    await fs.rename(file.path, fullFileName);

    req.body = { ...req.body, image: fileName };

    // console.log(req.body);

    createOnePersonalInfos(req.body).then(data => {
        return res.status(200).json({
            status: 200,
            message: "all good work",
            data: data,
        });
    })
};



// const works = (req, res) => {
//     getWork().then(data => {
//         return res.status(200).json({
//             status: 200,
//             message: "all good for work",
//             data: data,
//         })
//     })
// }

// const workById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const [rows, fields] = await dbConnection.query(
//             "select * from work where id = ?",
//             [id]
//         );
//         res.json({
//             data: rows,
//         });
//     } catch (error) {
//         console.log(error);
//         res.json({
//             status: "error",
//         });
//     }
// };



// const update = async (req, res) => {
//     try {
//         const { company_name, cv_id } = req.body;
//         const { id } = req.params;
//         const sql =
//             "update work set company_name = ?, cv_id = ? where id = ?";
//         const [rows, fields] = await dbConnection.query(sql, [
//             company_name,
//             cv_id,
//             id
//         ]);
//         res.json({
//             data: rows,
//         });
//     } catch (error) {
//         console.log(error);
//         res.json({
//             status: "error",
//         });
//     }
// };

// const workDelete = async (req, res) => {
//     try {
//         const { id } = req.params
//         const [rows, fields] = await dbConnection.query("delete from work where id = ?", [id])
//         res.json({
//             data: rows
//         })
//     } catch (error) {
//         console.log(error);
//         res.json({
//             status: "error"
//         })
//     }
// };


export { createPersonalInfos }
