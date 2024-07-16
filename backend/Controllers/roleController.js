// import { getRole } from "../repositories/roleRepo.js";

// const roles = (req, res) => {
//     getRole().then(data => {
//         return res.status(200).json({
//             status:200,
//             message: "all good",
//             data: data,
//         });
//     })
// }

// const createRole = ( req, res) => {
//     console.log(req.body);
//     createOneRole(req.body).then(data => {
//         return res.status(200).json({
//             status:200,
//             message: "all good for role",
//             data: data,
//         });
//     })
// }

// export { roles, createRole }