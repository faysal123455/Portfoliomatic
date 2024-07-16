import dbConnection from '../service/dbconnection.js';

import { getWork, createOneWork } from "../repositories/workRepo.js";

const works = (req, res) => {
    getWork().then(data => {
        return res.status(200).json({
            status: 200,
            message: "all good for work",
            data: data,
        })
    })
}

const workById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows, fields] = await dbConnection.query(
            "select * from work where id = ?",
            [id]
        );
        res.json({
            data: rows,
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: "error",
        });
    }
};

const createWork = (req, res) => {
    console.log(req.body);
    createOneWork(req.body).then(data => {
        return res.status(200).json({
            status: 200,
            message: "all good work",
            data: data,
        });
    })
};

const update = async (req, res) => {
    try {
        const { company_name, cv_id } = req.body;
        const { id } = req.params;
        const sql =
            "update work set company_name = ?, cv_id = ? where id = ?";
        const [rows, fields] = await dbConnection.query(sql, [
            company_name,
            cv_id,
            id
        ]);
        res.json({
            data: rows,
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: "error",
        });
    }
};

const workDelete = async (req, res) => {
    try {
        const { id } = req.params
        const [rows, fields] = await dbConnection.query("delete from work where id = ?", [id])
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


export { works, createWork, workById, update, workDelete }
