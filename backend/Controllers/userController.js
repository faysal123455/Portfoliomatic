import {
    getUser,
    createOneUser,
    getLoginUser,
    getSignupUser,
} from "../repositories/userRepo.js";

import argon2 from "argon2";
import dbConnection from "../service/dbconnection.js";

const users = (req, res) => {
    getUser().then((data) => {
        return res.status(200).json({
            status: 200,
            message: "all good for user",
            data: data,
        });
    });
};

const createUser = (req, res) => {
    // console.log(req.body);
    createOneUser(req.body).then((data) => {
        return res.status(200).json({
            status: 200,
            message: "all good for user",
            data: data,
        });
    });
};

const loginUser = (req, res) => {
    //   console.log(req.body);
    getLoginUser(req.body).then((data) => {
        return res.status(200).json({
            status: 200,
            message: "user connected",
            data: data,
        });
    });
};

const signupUser = async (req, res) => {
    const bodyHashed = {
        ...req.body,
        password: await argon2.hash(req.body.password),
    };

    // console.log(bodyHashed);

    getSignupUser(bodyHashed).then((data) => {
        return res.status(201).json({
            status: 201,
            message: "user created",
            // data: data,
        });
    });
};

const checkUserLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        let [user] = await dbConnection.query("SELECT user.* FROM user  WHERE email = ?", [email]);

        if (user.length === 0) {
            return res.status(401).json({ message: 'not', status: 401 });
        }

        let isPasswordValid = await argon2.verify(user[0].password, password);


        if (isPasswordValid) {
            return res.status(200).json({ message: 'Connection Successful', status: 200, data: user.shift() });
        } else {

            return res.status(401).json({ message: 'password incorrect', status: 401 });
        }
    } catch (error) {
        console.error('Error checking user login:', error);
        return res.status(400).json({ message: 'Error', status: 400 });
    }
}


export { users, createUser, loginUser, signupUser, checkUserLogin };
