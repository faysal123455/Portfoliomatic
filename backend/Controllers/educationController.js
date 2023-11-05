import { getEducation, createOneEducation } from "../repositories/educationRepo.js";

const educations = (req, res) => {
    getEducation().then(data => {
        return res.status(200).json({
            status:200,
            message: "all good for education",
            data: data,
        })
    })
}

const createEducation = ( req, res) => {
    console.log(req.body);
    createOneEducation(req.body).then(data => {
        return res.status(200).json({
            status:200,
            message: "all good for archivment",
            data: data,
        });
    })
}


export { educations, createEducation }
