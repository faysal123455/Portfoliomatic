import { getSummary, createOneSummary } from "../repositories/summaryRepo.js";

const summarys = (req, res) => {
    getSummary().then(data => {
        return res.status(200).json({
            status:200,
            message: "all good for summary",
            data: data,
        });
    })
}

const createSummary = ( req, res) => {
    console.log(req.body);
    createOneSummary(req.body).then(data => {
        return res.status(200).json({
            status:200,
            message: "all good for summary",
            data: data,
        });
    })
}

export { summarys, createSummary }