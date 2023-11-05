import { getLanguage, createOneLanguage } from "../repositories/languageRepo.js";

const languages = (req, res) => {
    getLanguage().then(data => {
        return res.status(200).json({
            status:200,
            message: "all good for language",
            data: data,
        });
    })
}
const createLanguage = ( req, res) => {
    console.log(req.body);
    createOneLanguage(req.body).then(data => {
        return res.status(200).json({
            status:200,
            message: "all good for laguage",
            data: data,
        });
    })
}

export { languages, createLanguage }