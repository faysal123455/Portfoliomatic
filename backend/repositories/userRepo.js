import dbConnection from "../service/dbconnection.js";


const getSignupUser = async (data) => {
    const sql = `
    INSERT INTO portfoliomatic.user
    VALUES(NULL, :firstname, :lastname, :email, :password)
    ;
    `;

    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;
    } catch (error) {
        return error;
    }
};


const getUser = async () => {
    const sql = `
    SELECT user.*
    FROM portfoliomatic.user;`;

    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error) {
        return error;
    }
};

const userDelete = async (userId) => {
    const query = "DELETE FROM portfoliomatic.user WHERE id = ?";
    try {
        const [result] = await dbConnection.execute(query, [userId]);
        console.log("Utilisateur supprimé avec succès");
        return { result, success: true };
    } catch (error) {
        console.error("Erreur lors de la suppression de l'utilisateur:", error);
        return { error, success: false };
    }
};


// const createOneUser = async (data) => {
//     const sql = `
//     INSERT INTO portfoliomatic.user
//     VALUES
//         (NULL, :firstname, :lastname, :email, :password, :telephone)
//     ;`;

//     try {
//         const [results] = await dbConnection.execute(sql, data);
//         return results;
//     } catch (error) {
//         return error;
//     }
// };

const getLoginUser = async (data) => {
    const sql = `
    SELECT user.*
    FROM portfoliomatic.user
    WHERE user.email = :email
    `;

    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;
    } catch (error) {
        return error;
    }
    
    // vérifier le hachage du mot de passe
};

export { getUser, getLoginUser, getSignupUser, userDelete };
