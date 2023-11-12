import dbConnection from "../service/dbconnection.js";

const getSkill = async () => {
    const sql = `
    SELECT skill.*
    FROM portfoliomatic.skill;`
    try {
        const [results] = await
            dbConnection.execute(sql);
        return results;
    } catch (error) {
        return error;
    }
};

const createOneSkill = async (data) => {
    const sql = `
    INSERT INTO portfoliomatic.skills
    VALUES
        (NULL, 'Problem Solving','1'),
        (NULL, 'Leadership','1');`


    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;

    } catch (error) {
        return error;
    }
};

export { getSkill, createOneSkill };