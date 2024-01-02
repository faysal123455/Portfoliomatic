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



export { createPersonalInfos }
