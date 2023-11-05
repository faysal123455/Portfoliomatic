import { getWork } from "../repositories/workRepo.js";

const works = (req, res) => {
    getWork().then(data => {
        return res.status(200).json({
            status:200,
            message: "all good for work",
            data: data,
        })
    })
};

const createWork = ( req, res) => {
    console.log(req.body);
    createOneWork(req.body).then(data => {
        return res.status(200).json({
            status:200,
            message: "all good work",
            data: data,
        });
    })
}


export { works, createWork }
