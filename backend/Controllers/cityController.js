import dbConnection from '../service/dbconnection.js';

import { getCity, createOneCity } from "../repositories/cityRepo.js";

const citys = (req, res) => {
    getCity().then(data => {
        return res.status(200).json({
            status: 200,
            message: "all good for city",
            data: data,
        });
    })
}

const createCity = (req, res) => {
    console.log("lolo", req.body);
    createOneCity(req.body).then(data => {
        return res.status(200).json({
            status: 200,
            message: "all good for city",
            data: data,
        });
    })
};

export { citys, createCity }
