import {
    getUser,
    createOneUser,
    getLoginUser,
    getSignupUser,
} from "../repositories/userRepo.js";
import argon2 from "argon2";

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
    //   console.log(req.body);
    const bodyHashed = {
        ...req.body,
        password: await argon2.hash(req.body.password),
    };

    getSignupUser(bodyHashed).then((data) => {
        return res.status(201).json({
            status: 201,
            message: "user created",
            data: data,
        });
    });
};

export { users, createUser, loginUser, signupUser };
