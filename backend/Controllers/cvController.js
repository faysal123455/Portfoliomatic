import { getCv, createOneCv } from "../repositories/cvRepo.js";

const cvs = (req, res) => {
    getCv().then(data => {
        return res.status(200).json({
            status:200,
            message: "all good for cv",
            data: data,
        });
    })
}

const createCv = ( req, res) => {
    console.log(req.body);
    createOneCv(req.body).then(data => {
        return res.status(200).json({
            status:200,
            message: "all good for cv",
            data: data,
        });
    })
}

export { cvs, createCv }