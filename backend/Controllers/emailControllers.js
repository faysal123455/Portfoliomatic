const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
dotenv.config();


const sendEmail = expressAsyncHandler(async (req, res) => {
    const { email, subject, message } = req.body;
    console.log(email, subject, message);

});

module.exports = { sendEmail }; 