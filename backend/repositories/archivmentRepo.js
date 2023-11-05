import dbConnection from "../service/dbconnection.js";

const getArchivment = async () => {
    const sql = `
    SELECT archivment.*
    FROM portfoliomatic.archivment;`

    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error) {
        return error;
    }
};

const createOneArchivment = async (data) => {
    const sql = `
    INSERT INTO portfoliomatic.archivment
    VALUES
    (NULL, 'humanity','father of humanity','1');`


    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;

    } catch (error) {
        return error;
    }
};

export { getArchivment, createOneArchivment };