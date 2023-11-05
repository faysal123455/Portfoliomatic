import dbConnection from "../service/dbconnection.js";

const getRole = async () => {
    const sql = `
    SELECT role.*
    FROM portfoliomatic.role;`;

    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error) {
        return error;
    }
};
const createOneRole = async (data) => {
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

export {
    getRole, createOneRole
};