// import nodemailer from 'nodemailer';

// import Mailgen from 'mailgen';

// import { EMAIL, PASSWORD } from '../envnode.js'

// /** send mail from testing account */


// /** send mail from real gmail account */
// const getbill = (req, res) => {

//     const { userEmail } = req.body;

//     let config = {
//         service: 'gmail',
//         auth: {
//             user: EMAIL,
//             pass: PASSWORD
//         }
//     }

//     let transporter = nodemailer.createTransport(config);

//     let MailGenerator = new Mailgen({
//         theme: "default",
//         product: {
//             name: "Savefood",
//             link: 'https://mailgen.js/'
//         }
//     })

//     let response = {
//         body: {
//             name: "faysal sarker",
//             intro: "Your bill has arrived!",
//             table: {
//                 data: [
//                     {
//                         item: "Nodemailer Stack Book",
//                         description: "A Backend application",
//                         price: "$10.99",
//                     }
//                 ]
//             },
//             outro: "Looking forward to do more business"
//         }
//     }

//     let mail = MailGenerator.generate(response)

//     let message = {
//         from: EMAIL,
//         to: userEmail,
//         subject: "Place Order",
//         html: mail
//     }

//     transporter.sendMail(message).then(() => {
//         return res.status(201).json({
//             msg: "your message has ben send sucessfully"
//         })
//     }).catch(error => {
//         return res.status(500).json({ error })
//     })

//     // res.status(201).json("getBill Successfully...!");
// }


// export  {
//     getbill
// }