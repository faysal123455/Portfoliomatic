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

const getArchivmentByListIds = async (listIds) => {
    const sql = `
    SELECT archivment.*
    FROM portfoliomatic.archivment
    WHERE archivment.id IN(${listIds});`

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
    (NULL, :name,:recognitation , :cv_id);`


    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;

    } catch (error) {
        return error;
    }
};

const updateArchivment = async (id, newData) => {
    const sql = `
    UPDATE portfoliomatic.archivment
    SET
        field1 = ?,
        field2 = ?,
        field3 = ?
    WHERE id = ?;`;

    try {
        const [results] = await dbConnection.execute(sql, [...newData, id]);
        return results;
    } catch (error) {
        return error;
    }
};

export { getArchivment, createOneArchivment, updateArchivment, getArchivmentByListIds };