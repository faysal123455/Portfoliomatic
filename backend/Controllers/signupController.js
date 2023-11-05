import { getSignup, createOneSignup } from "../repositories/signupRepo.js";

const signups = (req, res) => {
    getSignup().then(data => {
        return res.status(200).json({
            status: 200,
            message: "all good for signup",
            data: data,
        });
    })
}

const createSignup = (req, res) => {
    console.log(req.body);
    createOneSignup(req.body).then(data => {
        return res.status(200).json({
            status: 200,
            message: "all good for signup",
            data: data,
        });
    })
}

export { signups, createSignup }