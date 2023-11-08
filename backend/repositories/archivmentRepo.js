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

const updateTwoArchivment = async (archivmentId, data) => {
    const sql = `
    UPDATE portfoliomatic.archivment
    SET
        archivment_name = ?,
        description = ?,
        category_id = ?
    WHERE archivment_id = ?;`;

    try {
        const [results] = await dbConnection.execute(sql, [
            data.archivment_name,
            data.description,
            data.category_id,
            archivmentId
        ]);
        return results;
    } catch (error) {
        return error;
    }
};

const deleteThreeArchivment = async (archivmentId) => {
    const sql = `
    DELETE FROM portfoliomatic.archivment
    WHERE archivment_id = ?;`;

    try {
        const [results] = await dbConnection.execute(sql, [archivmentId]);
        return results;
    } catch (error) {
        return error;
    }
};
export { getArchivment, createOneArchivment, updateTwoArchivment, deleteThreeArchivment };