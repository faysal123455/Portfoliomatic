import {
    getUser,
    getLoginUser,
    getSignupUser,
    userDelete
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

// const createUser = (req, res) => {
//     // console.log(req.body);
//     createOneUser(req.body).then((data) => {
//         return res.status(200).json({
//             status: 200,
//             message: "all good for user",
//             data: data,
//         });
//     });
// };




// const deleteUserController = async (req, res) => {
//     const userId = req.params.userId;
//     try {
//         const deletionResult = await userDelete(userId);
//         if (!deletionResult.success) {
//             return res.status(500).json({
//                 status: 500,
//                 message: "Erreur lors de la suppression de l'utilisateur",
//             });
//         }
//         res.status(200).json({
//             status: 200,
//             message: "Utilisateur supprimé avec succès",
//         });
//     } catch (error) {
//         console.error("Erreur lors de la suppression de l'utilisateur:", error);
//         res.status(500).json({
//             status: 500,
//             message: "Erreur lors de la suppression de l'utilisateur",
//         });
//     }
// };


const deleteUserController = async (req, res) => {
    try {
        const userId = req.params.userId;

        // Delete associated records in the cv table
        await dbConnection.query("DELETE FROM cv WHERE user_id = ?", [userId]);

        // Now, delete the user from the user table
        const [result] = await dbConnection.execute("DELETE FROM user WHERE id = ?", [userId]);

        res.json({
            status: 200,
            message: "User deleted successfully",
            data: result,
        });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({
            status: 500,
            message: "Error deleting user",
            error: error,
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body
        const { id } = req.params
        const sql = "update user set firstname = ?, lastname = ?, email = ?, password = ? where id = ?"
        const [rows, fields] = await dbConnection.query(sql, [firstname, lastname, email, password, id])
        res.json({
            data: rows
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: "error"
        })
    }
};

// const userDelete = async (req, res) => {
//     try {
//         const { id } = req.params
//         const [rows, fields] = await dbConnection.query("delete from user where id = ?", [id])
//         res.json({
//             data: rows
//         })
//     } catch (error) {
//         console.log(error);
//         res.json({
//             status: "error"
//         })
//     }
// };



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
    console.log('bodyHashed');
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


export { users, loginUser, signupUser, checkUserLogin, updateUser, deleteUserController };
