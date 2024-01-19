import dbConnection from '../service/dbconnection.js';

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

const skillById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows, fields] = await dbConnection.query("select * from skill where id = ?", [id]);
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

const createSkill = (req, res) => {
    console.log("lolo", req.body);
    createOneSkill(req.body).then(data => {
        return res.status(200).json({
            status: 200,
            message: "all good for skill",
            data: data,
        });
    })
};

const update = async (req, res) => {
    try {
        const { name, cv_id } = req.body
        const { id } = req.params
        const sql = "update skills set name = ?, cv_id = ? where id = ?"
        const [rows, fields] = await dbConnection.query(sql, [name, cv_id, id])
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

const skillDelete = async (req, res) => {
    try {
        const { id } = req.params
        const [rows, fields] = await dbConnection.query("delete from skill where id = ?", [id])
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

export { skills, createSkill, skillById, update, skillDelete }
