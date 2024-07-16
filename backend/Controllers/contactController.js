import dbConnection from '../service/dbconnection.js';

import { getContact, createOneContact } from "../repositories/contactRepo.js";

const contacts = (req, res) => {
    getContact().then(data => {
        return res.status(200).json({
            status: 200,
            message: "all good for contact",
            data: data,
        });
    })
}

const contactById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows, fields] = await dbConnection.query("select * from contact where id = ?", [id]);
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

const createContact = (req, res) => {
    console.log("lolo", req.body);
    createOneContact(req.body).then(data => {
        return res.status(200).json({
            status: 200,
            message: "all good for contact",
            data: data,
        });
    })
};

export { contacts, createContact, contactById }
