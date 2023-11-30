import dbConnection from '../service/dbconnection.js';

import { getLanguage, createOneLanguage } from "../repositories/languageRepo.js";

const languages = (req, res) => {
    getLanguage().then(data => {
        return res.status(200).json({
            status: 200,
            message: "all good for language",
            data: data,
        });
    })
}

const languageById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows, fields] = await dbConnection.query("select * from language where id = ?", [id]);
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

const createLanguage = (req, res) => {
    console.log(req.body);
    createOneLanguage(req.body).then(data => {
        return res.status(200).json({
            status: 200,
            message: "all good for language",
            data: data,
        });
    })
};


const update = async (req, res) => {
    try {
        const { name, level, cv_id } = req.body
        const { id } = req.params
        const sql = "update language set name = ?, level = ?, cv_id = ? where id = ?"
        const [rows, fields] = await dbConnection.query(sql, [name, level, cv_id, id])
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

const languageDelete = async (req, res) => {
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


export { languages, createLanguage, languageById, update, languageDelete }