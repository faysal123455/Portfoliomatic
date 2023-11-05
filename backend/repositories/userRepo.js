import dbConnection from "../service/dbconnection.js";

const getUser = async () => {
    const sql = `
    SELECT user.*
    FROM portfoliomatic.user;`

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
    ;`

    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;
    }
    catch (error) {
        return error;
    }
};


export { getUser, createOneUser };
