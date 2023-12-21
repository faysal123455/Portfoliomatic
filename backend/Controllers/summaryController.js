import dbConnection from '../service/dbconnection.js';

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

const summaryById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows, fields] = await dbConnection.query("select * from summary where id = ?", [id]);
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

const createSummary = (req, res) => {
    console.log(req.body);
    createOneSummary(req.body).then(data => {
        return res.status(200).json({
            status: 200,
            message: "all good for summary",
            data: data,
        });
    })
}

const update = async (req, res) => {
    try {
        const { goal, cv_id } = req.body
        const { id } = req.params
        const sql = "update summary set goal =?, cv_id = ? where id = ?"
        const [rows, fields] = await dbConnection.query(sql, [goal, cv_id, id])
        res.json({
            data: rows
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: "error"
        })
    }
};

const summaryDelete = async (req, res) => {
    try {
        const { id } = req.params
        const [rows, fields] = await dbConnection.query("delete from language where id = ?", [id])
        res.json({
            data: rows
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: "error"
        })
    }
};

export { summarys, createSummary, summaryById, update, summaryDelete }