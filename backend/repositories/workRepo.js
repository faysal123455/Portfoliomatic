import dbConnection from "../service/dbconnection.js";

const getWork = async () => {
    const sql = `
    SELECT work.*
    FROM portfoliomatic.work;`

    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error) {
        return error;
    }
};

const createOneWork = async (data) => {
    const sql = `
    NSERT INTO portfoliomatic.work
    VALUES
    (NULL, 'Pernod Ricard', 'paris','14-01-23', '01-01-2024','Project Manager','1');`


    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;

    } catch (error) {
        return error;
    }
};

export { getWork, createOneWork };