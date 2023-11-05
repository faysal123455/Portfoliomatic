import { getSkill, createOneSkill } from "../repositories/skillRepo.js"

const skills = (req, res) => {
    getSkill().then(data => {
        return res.status(200).json({
            status:200,
            message: "all good for skill",
            data: data,
        })
    })
};

const createSkill = ( req, res) => {
    console.log(req.body);
    createOneSkill(req.body).then(data => {
        return res.status(200).json({
            status:200,
            message: "all good for skill",
            data: data,
        });
    })
}


export { skills, createSkill }
