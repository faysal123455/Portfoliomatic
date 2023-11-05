import { getArchivment, createOneArchivment } from "../repositories/archivmentRepo.js";

const archivments = (req, res) => {
    getArchivment().then(data => {
        return res.status(200).json({
            status:200,
            message: "all good for archivment",
            data: data,
        });
    })
}

const createArchivment = ( req, res) => {
    console.log(req.body);
    createOneArchivment(req.body).then(data => {
        return res.status(200).json({
            status:200,
            message: "all good for archivment",
            data: data,
        });
    })
}


export { archivments, createArchivment }
