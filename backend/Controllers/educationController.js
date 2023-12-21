import dbConnection from '../service/dbconnection.js';

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

const educationById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows, fields] = await dbConnection.query("select * from education where id = ?", [id]);
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

const createEducation = ( req, res) => {
    console.log(req.body);
    createOneEducation(req.body).then(data => {
        return res.status(200).json({
            status:200,
            message: "all good for education",
            data: data,
        });
    })
}

const update = async (req, res) => {
    try {
        const { name, date_start, date_end, details, cv_id, city_id } = req.body
        const { id } = req.params
        const sql = "update education set name = ?, date_start = ?, date_end = ?, details = ?, cv_id = ?, city_id = ? where id = ?"
        const [rows, fields] = await dbConnection.query(sql, [name, date_start, date_end, details, cv_id, city_id, id])
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

const educationDelete = async (req, res) => {
    try {
        const { id } = req.params
        const [rows, fields] = await dbConnection.query("delete from education where id = ?", [id])
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


export { educations, createEducation, educationById, update, educationDelete }
