import dbConnection from '../service/dbconnection.js';


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


const cvById = async (req , res) => {
    try {
        const { id } = req.params;
        const [rows, fields] = await dbConnection.query("select * from cv where id = ?", [id]);
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


const createCv = (req, res) => {
    console.log(req.body);
    createOneCv(req.body).then(data => {
        return res.status(200).json({
            status: 200,
            message: "all good for cv",
            data: data,
        });
    })
}


const update = async (req , res) => {
    try {
        const { id } = req.params;
        const [rows, fields] = await dbConnection.query("select * from cv where id = ?", [id]);
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







export { cvs, createCv, cvById }