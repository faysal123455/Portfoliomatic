import dbConnection from "../service/dbconnection.js";

const getCv = async () => {
    const sql = `
    SELECT cv.*
    FROM portfoliomatic.cv;`

    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error) {
        return error;
    }
};

const createOneCv = async (data) => {
    const sql = `
    INSERT INTO portfoliomatic.cv
    VALUES
    (NULL, :nom, :prenom, :image, :user_id);`

    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;

    } catch (error) {
        return error;
    }
};

export {
    getCv,
    createOneCv
};
