import dbConnection from "../service/dbconnection.js";

const getArchivment = async () => {
    const sql = `
    SELECT signup.*
    FROM portfoliomatic.signup;`

    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error) {
        return error;
    }
};

const createOneSignup = async (data) => {
    const sql = `
    INSERT INTO portfoliomatic.signup
    VALUES
    (NULL, 'faysal','faysal.sarker@pernod-ricard.com','Ricard00_');`


    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;

    } catch (error) {
        return error;
    }
};

export { getSign, createOneSignup };
