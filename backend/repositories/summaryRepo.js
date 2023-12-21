import dbConnection from "../service/dbconnection.js";

const getSummary = async () => {
    const sql = `
    SELECT summary.*
    FROM portfoliomatic.summary;`

    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error) {
        return error;
    }
};

const createOneSummary = async (data) => {
    const sql = `
    INSERT INTO portfoliomatic.summary
    VALUES
        (NULL, :goal, :cv_id );
        `;


    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;

    } catch (error) {
        return error;
    }
};

export {
    getSummary, createOneSummary
};