import dbConnection from "../service/dbconnection.js";

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

const createOneUser = async (data) => {
    const sql = `
    INSERT INTO portfoliomatic.user
    VALUES
        (NULL, :firstname, :lastname, :email, :password, :telephone)
    ;`;

    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;
    } catch (error) {
        return error;
    }
};

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

const getSignupUser = async (data) => {
    const sql = `
    INSERT INTO portfoliomatic.user
    VALUES(NULL, :firstname, :lastname, :email, :password, :phone)
    ;
    `;

    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;
    } catch (error) {
        return error;
    }
};

export { getUser, createOneUser, getLoginUser, getSignupUser };
