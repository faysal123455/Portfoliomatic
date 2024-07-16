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

const getSkillByListIds = async (listIds) => {
    const sql = `
    SELECT skill.*
    FROM portfoliomatic.skill
    WHERE skill.id IN(${listIds});`

    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error) {
        return error;
    }
};

const createOneSkill = async (data) => {
    const sql = `
    INSERT INTO portfoliomatic.skill
    VALUES
        (NULL, :name, :cv_id );
        `;

    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;

    } catch (error) {
        return error;
    }
};

export { getSkill, createOneSkill, getSkillByListIds };
