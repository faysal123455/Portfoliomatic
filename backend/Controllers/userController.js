import { getUser, createOneUser } from "../repositories/userRepo.js";

const users = (req, res) => {
    getUser().then(data => {
        return res.status(200).json({
            status:200,
            message: "all good for user",
            data: data,
        });
    })
}

const createUser = (req, res) => {
    // console.log(req.body);
    createOneUser(req.body).then(data => {
        return res.status(200).json({
            status:200,
            message: "all good for user",
            data: data,
        });
    })
}

export { users, createUser }